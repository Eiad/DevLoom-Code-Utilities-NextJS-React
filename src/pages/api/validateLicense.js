import Cors from "cors";
import { db } from "../../firebase";
import {
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";

const cors = Cors({
  origin: true,
  methods: ["POST", "HEAD", "OPTIONS"], 
  allowedHeaders: ["Content-Type", "Authorization"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const validateLicense = async (req, res) => {
  await runMiddleware(req, res, cors);

  const { licenseKey } = req.body;

  const GUMROAD_PRODUCT_ID = process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_ID;

  try {
    const response = await fetch("https://api.gumroad.com/v2/licenses/verify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `product_id=${GUMROAD_PRODUCT_ID}&license_key=${licenseKey}&increment_uses_count=false`,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Gumroad error: ${response.status}, ${text}`);
    }

    const data = await response.json();

    if (!data.success) {
      return res.status(400).json({ message: "Invalid License Key" });
    }

    const q = query(
      collection(db, "GUMROAD_SALES"),
      where("LicenseKey", "==", licenseKey)
    );
    const querySnapshot = await getDocs(q);
    let documentID = null;
    let alreadyActivated = false;

    querySnapshot.forEach((document) => {
      const docData = document.data();
      if (docData.LicenseKey === licenseKey) {
        documentID = document.id;
        if (docData.isValidated) {
          alreadyActivated = true;
        }
      }
    });

    if (alreadyActivated) {
      return res.status(400).json({
        message: "The license is valid, but it has already been activated.",
      });
    } else if (documentID) {
      const usageID = Math.random().toString(36).substring(2, 7);
      const documentRef = doc(db, "GUMROAD_SALES", documentID);
      await updateDoc(documentRef, { isValidated: true, usageID });

      const docData = (await getDocs(q)).docs[0].data();
      const responseData = {
        message: "License Activated",
        Name: docData.Name,
        EMail: docData.EMail,
        LicenseKey: docData.LicenseKey,
        PurchaseDate: docData.PurchaseDate,
        usageID,
      };
      return res.status(200).json(responseData);
    } else {
      return res
        .status(400)
        .json({ message: "License Key not found in database." });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).json({
      message:
        "An error has occurred; you may be using an invalid license key. Please reach out to support..",
    });
  }
};

export default validateLicense;

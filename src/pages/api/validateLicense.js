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

// CORS middleware setup for handling cross-origin requests
const cors = Cors({
  origin: true, // Allow any origin
  methods: ["POST", "HEAD", "OPTIONS"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
});

// Function to handle middleware asynchronously
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

// Main function to validate the license
const validateLicense = async (req, res) => {
  // Running CORS middleware to handle cross-origin requests
  await runMiddleware(req, res, cors);

  // Destructuring to get the license key from the request body
  const { licenseKey } = req.body;

  const GUMROAD_PRODUCT_ID = process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_ID;

  try {
    // Make a request to the Gumroad API to verify the license key
    const response = await fetch("https://api.gumroad.com/v2/licenses/verify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `product_id=${GUMROAD_PRODUCT_ID}&license_key=${licenseKey}&increment_uses_count=false`,
    });

    // If response isn't successful, throw an error
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Gumroad error: ${response.status}, ${text}`);
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // If Gumroad API returns success as false, respond with an error
    if (!data.success) {
      return res.status(400).json({ message: "Invalid License Key" });
    }

    // Query the Firestore database to check if the license key exists
    const q = query(
      collection(db, "GUMROAD_SALES"),
      where("LicenseKey", "==", licenseKey)
    );
    const querySnapshot = await getDocs(q);
    let documentID = null;
    let alreadyActivated = false;

    // Iterating through the documents returned from Firestore
    querySnapshot.forEach((document) => {
      const docData = document.data();
      if (docData.LicenseKey === licenseKey) {
        documentID = document.id;
        if (docData.isValidated) {
          alreadyActivated = true; // Check if the license has already been activated
        }
      }
    });

    // Handling the scenarios based on whether the license is already activated or exists in the database
    if (alreadyActivated) {
      return res.status(400).json({
        message: "License is correct but it's been already activated",
      });
    } else if (documentID) {
      const documentRef = doc(db, "GUMROAD_SALES", documentID);
      await updateDoc(documentRef, { isValidated: true });
      const docData = (await getDocs(q)).docs[0].data();
      const responseData = {
        message: "License Activated",
        EMail: docData.EMail,
        LicenseKey: docData.LicenseKey,
        PurchaseDate: docData.PurchaseDate,
      };
      return res.status(200).json(responseData);
    } else {
      return res
        .status(400)
        .json({ message: "License Key not found in database." });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(400)
      .json({ message: "An error occurred while validating the license." });
  }
};

export default validateLicense;

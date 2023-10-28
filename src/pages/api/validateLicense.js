// Import dependencies
import { db } from "../../firebase"; // Import Firestore
import {
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore"; // Firestore methods

export default async (req, res) => {
  const { licenseKey } = req.body;
  const GUMROAD_PRODUCT_ID = process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_ID;

  try {
    // Verify with Gumroad API
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

    // Check Firestore for existing license
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
        message: "License is correct but it's been already activated",
      });
    } else if (documentID) {
      // Update Firestore document
      const documentRef = doc(db, "GUMROAD_SALES", documentID);
      await updateDoc(documentRef, { isValidated: true });

      return res.status(200).json({ message: "License Activated" });
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

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
const verifyLicense = async (req, res) => {
  await runMiddleware(req, res, cors);

  const { licenseKey, usageID } = req.body;

  try {
    const q = query(
      collection(db, "GUMROAD_SALES"),
      where("LicenseKey", "==", licenseKey)
    );
    const querySnapshot = await getDocs(q);

    let isValid = false;

    querySnapshot.forEach((doc) => {
      if (doc.data().usageID === usageID) {
        isValid = true;
      }
    });

    if (isValid) {
      return res
        .status(200)
        .json({ message: "License verified successfully." });
    } else {
      return res.status(400).json({ message: "License verification failed." });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default verifyLicense;

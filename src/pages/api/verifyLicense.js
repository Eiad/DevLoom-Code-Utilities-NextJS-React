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

// Initializing CORS middleware to handle cross-origin requests.
// This is important for security in a web application.
const cors = Cors({
  origin: true, // Allow requests from any origin.
  methods: ["POST", "HEAD", "OPTIONS"], // Specify which HTTP methods are allowed.
  allowedHeaders: ["Content-Type", "Authorization"], // Specify which headers are allowed.
});

// Function to handle middleware asynchronously.
// This makes it easier to use middleware in async functions.
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

// Main function to validate the license.
const verifyLicense = async (req, res) => {
  // Run the CORS middleware.
  await runMiddleware(req, res, cors);

  // Extracting licenseKey and usageID from the request body.
  const { licenseKey, usageID } = req.body;

  try {
    // Querying the Firestore database to find a document matching the license key.
    const q = query(
      collection(db, "GUMROAD_SALES"),
      where("LicenseKey", "==", licenseKey)
    );
    const querySnapshot = await getDocs(q);

    let isValid = false;

    // Checking each document in the query result.
    querySnapshot.forEach((doc) => {
      // If a document with the matching usageID is found, set isValid to true.
      if (doc.data().usageID === usageID) {
        isValid = true;
      }
    });

    // If the license is valid, send a success response.
    if (isValid) {
      return res
        .status(200)
        .json({ message: "License verified successfully." });
    } else {
      // If the license is not valid, send a failure response.
      return res.status(400).json({ message: "License verification failed." });
    }
  } catch (error) {
    // Log and handle any errors during the process.
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default verifyLicense;

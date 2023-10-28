import React, { useState, useEffect } from "react";

const LicenseActivation = () => {
  // State variables for the license key, response message, activation status, and license data
  const [licenseKey, setLicenseKey] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [licenseActivated, setLicenseActivated] = useState(false);
  const [licenseData, setLicenseData] = useState({});

  // useEffect hook to check if the license has been activated (stored in local storage)
  useEffect(() => {
    const activationStatus = localStorage.getItem("Devloom");
    if (activationStatus === "Activated") {
      setLicenseActivated(true);
    }
  }, []);

  // Function to handle license activation
  const handleActivate = async () => {
    try {
      // Make a POST request to validate the license key
      const res = await fetch("https://www.devloom.net/api/validateLicense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey }),
      });

      // Parse the response data
      const data = await res.json();
      // Set the response message and license data and get the document keys value from front end use
      setResponseMessage(data.message);
      setLicenseData({
        EMail: data.EMail,
        LicenseKey: data.LicenseKey,
        PurchaseDate: data.PurchaseDate,
      });

      // If the license is activated, store the status in local storage
      if (data.message === "License Activated") {
        localStorage.setItem("Devloom", "Activated");
        setLicenseActivated(true);
      }
    } catch (error) {
      // Handle errors
      setResponseMessage("An error occurred while validating the license.");
    }
  };

  // Render the component
  return (
    <div className="activation-container">
      <h1>License Activation</h1>
      {/* Check if the license is not activated to display activation input */}
      {!licenseActivated && (
        <div>
          <h2>Activate Your License</h2>
          <input
            type="text"
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            placeholder="Enter License Key"
            className="license-input"
          />
          <button onClick={handleActivate} className="activate-button">
            Activate it
          </button>
          {/* Display the response message */}
          {responseMessage && <div className="alert">{responseMessage}</div>}
        </div>
      )}
      {/* Display the license information when activated */}
      {licenseActivated && (
        <div>
          <h2>Welcome to the Premium Features</h2>
          <p>
            Thanks for activating your license. Enjoy all the premium features
            available!
          </p>
          <p>Email: {licenseData.EMail}</p>
          <p>License Key: {licenseData.LicenseKey}</p>
          <p>Purchase Date: {licenseData.PurchaseDate}</p>
        </div>
      )}
    </div>
  );
};

export default LicenseActivation;

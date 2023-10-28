import React, { useState, useEffect } from "react";

const LicenseActivation = () => {
  const [licenseKey, setLicenseKey] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [licenseActivated, setLicenseActivated] = useState(false);
  const [licenseData, setLicenseData] = useState({});

  useEffect(() => {
    const activationStatus = localStorage.getItem("Devloom");
    if (activationStatus === "Activated") {
      setLicenseActivated(true);
    }
  }, []);

  const handleActivate = async () => {
    try {
      const res = await fetch("https://www.devloom.net/api/validateLicense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey }),
      });

      const data = await res.json();
      setResponseMessage(data.message);
      setLicenseData({
        EMail: data.EMail,
        LicenseKey: data.LicenseKey,
        PurchaseDate: data.PurchaseDate,
      });

      if (data.message === "License Activated") {
        localStorage.setItem("Devloom", "Activated");
        setLicenseActivated(true);
      }
    } catch (error) {
      setResponseMessage("An error occurred while validating the license.");
    }
  };

  return (
    <div className="activation-container">
      <h1>License Activation</h1>
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
          {responseMessage && <div className="alert">{responseMessage}</div>}
        </div>
      )}
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

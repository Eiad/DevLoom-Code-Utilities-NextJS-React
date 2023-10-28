// src/pages/LicenseActivation.js

import React, { useState } from "react";

const LicenseActivation = () => {
  const [licenseKey, setLicenseKey] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleActivate = async () => {
    try {
      const res = await fetch("/api/validateLicense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server error: ${res.status}, ${text}`);
      }

      const data = await res.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error("Error:", error.message);
      setResponseMessage("An error occurred while validating the license.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={licenseKey}
        onChange={(e) => setLicenseKey(e.target.value)}
        placeholder="Enter License Key"
      />
      <button onClick={handleActivate}>Activate it</button>
      <p>{responseMessage}</p>
    </div>
  );
};

export default LicenseActivation;

import React, { useState } from "react";

const LicenseActivation = () => {
  const [licenseKey, setLicenseKey] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleActivate = async () => {
    try {
      const res = await fetch("https://www.devloom.net/api/validateLicense", {
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

      // If the license was activated successfully, update localStorage
      if (data.message === "License Activated") {
        localStorage.setItem("Devloom", "Activated");
      }
    } catch (error) {
      if (error.message === "Failed to fetch") {
        setResponseMessage(
          "Please ensure you're connected to the internet to activate your license."
        );
      } else {
        console.error("Error:", error.message);
        setResponseMessage("An error occurred while validating the license.");
      }
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

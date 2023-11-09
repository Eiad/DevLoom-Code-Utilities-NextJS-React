import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../app/css/license-page.css";

const LicenseActivation = () => {
  const [licenseKey, setLicenseKey] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [licenseActivated, setLicenseActivated] = useState(false);
  const [licenseData, setLicenseData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const activationStatus = localStorage.getItem("Devloom");
    if (activationStatus === "Activated") {
      setLicenseActivated(true);
      const storedLicenseData = {
        Name: localStorage.getItem("Name"),
        EMail: localStorage.getItem("EMail"),
        LicenseKey: localStorage.getItem("LicenseKey"),
        PurchaseDate: localStorage.getItem("PurchaseDate"),
        usageID: localStorage.getItem("usageID"), // retrieving usageID
      };
      setLicenseData(storedLicenseData);
    }
  }, []);

  useEffect(() => {
    const checkLicenseValidity = async () => {
      const licenseKey = localStorage.getItem("LicenseKey");
      const usageID = localStorage.getItem("usageID");

      if (licenseKey && usageID) {
        const res = await fetch("https://www.devloom.net/api/verifyLicense", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ licenseKey, usageID }),
        });

        if (res.ok) {
          setLicenseActivated(true);
          // License verification successful, load and display license data
        } else {
          // License verification failed, clear local storage and redirect
          localStorage.clear();
          window.location.href = "/LicenseDeactivated";
        }
      }
    };

    const activationStatus = localStorage.getItem("Devloom");
    const lastCheckedDate = localStorage.getItem("lastCheckedDate");

    // Check if the license has been activated and 30 days have passed since the last check
    if (activationStatus === "Activated") {
      const currentDate = new Date();
      const nextCheckDate = new Date(lastCheckedDate);
      nextCheckDate.setDate(nextCheckDate.getDate() + 30);

      if (!lastCheckedDate || currentDate >= nextCheckDate) {
        checkLicenseValidity();
        localStorage.setItem("lastCheckedDate", currentDate.toISOString());
      }
    }
  }, []);

  const handleActivate = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://www.devloom.net/api/validateLicense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey }),
      });

      setTimeout(async () => {
        const data = await res.json();
        setIsLoading(false);

        setResponseMessage(data.message);
        setLicenseData({
          Name: data.Name,
          EMail: data.EMail,
          LicenseKey: data.LicenseKey,
          PurchaseDate: data.PurchaseDate,
        });

        if (data.message === "License Activated") {
          localStorage.setItem("Devloom", "Activated");
          localStorage.setItem("Name", data.Name);
          localStorage.setItem("EMail", data.EMail);
          localStorage.setItem("LicenseKey", data.LicenseKey);
          localStorage.setItem("PurchaseDate", data.PurchaseDate);
          localStorage.setItem("usageID", data.usageID); // storing usageID
          setLicenseActivated(true);
          window.location.reload();
        }
      }, 3000);
    } catch (error) {
      setResponseMessage(
        "An error occurred while validating the license. Please contact Devloom support"
      );
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DevLoom License Activation - Unlock Premium Features</title>
        <meta
          name="description"
          content="Activate your DevLoom license and dive into a world of premium developer tools. Experience enhanced coding with added features, faster performance, offline access, and the assurance that your code remains on your machine."
        />
      </Head>
      <div className="top-section">
        <h1>Experience the Best of DevLoom Premium</h1>
        <p>
          Activate your DevLoom license and discover the future of coding. With
          our premium suite, you not only get access to advanced features but
          also benefit from offline functionality. No more dependency on fickle
          internet connections.
        </p>
        <p>
          Your privacy matters to us. At DevLoom, your code remains safely on
          your machine. Ditch those untrustworthy platforms and ensure your
          work&#39;s security with us.
        </p>
        <p className="get-started">
          Work offline - No ads - No Trackers - No Bullshit ;)
        </p>
      </div>

      {!licenseActivated && (
        <div className="activation-container">
          <h3 className="activation-header">Activate Your License</h3>
          <input
            type="text"
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            placeholder="Enter License Key"
            className="license-input text-center"
            disabled={isLoading}
          />
          <button
            onClick={handleActivate}
            className="activate-button"
            disabled={isLoading}
          >
            {isLoading ? "Activating.." : "Activate it"}
          </button>
          {responseMessage && (
            <div className="activation-alert">{responseMessage}</div>
          )}
        </div>
      )}
      {licenseActivated && (
        <div className="license-container border-round">
          <h2 className="license-header text-center">
            Thanks for your Purchase
          </h2>
          <p className="license-introText ">
            Your license is activated. Happy Coding!
          </p>
          <p className="license-infoText">
            Name: <span>{licenseData.Name}</span>
          </p>
          <p className="license-infoText">
            Email: <span>{licenseData.EMail}</span>
          </p>
          <p className="license-infoText">
            License Key: <span>{licenseData.LicenseKey}</span>
          </p>
          <p className="license-infoText">
            Purchase Date: <span>{licenseData.PurchaseDate}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default LicenseActivation;

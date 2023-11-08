import { useEffect } from "react";

const useCheckLicenseValidity = (setLicenseActivated) => {
  useEffect(() => {
    let isOnline = () => navigator.onLine;

    const checkLicenseValidity = async () => {
      const licenseKey = localStorage.getItem("LicenseKey");
      const usageID = localStorage.getItem("usageID");

      if (licenseKey && usageID && isOnline()) {
        const res = await fetch("https://www.devloom.net/api/verifyLicense", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ licenseKey, usageID }),
        });

        if (res.ok) {
          setLicenseActivated(true);
        } else {
          localStorage.clear();
          window.location.href = "/LicenseDeactivated";
        }
      }
    };

    const activationStatus = localStorage.getItem("Devloom");
    const lastCheckedUpdateDate = localStorage.getItem("lastCheckedUpdateDate");

    if (activationStatus === "Activated") {
      setLicenseActivated(true);
      const currentDate = new Date();
      const nextCheckDate = new Date(lastCheckedUpdateDate);
      nextCheckDate.setDate(nextCheckDate.getDate() - 1);

      if (!lastCheckedUpdateDate || currentDate >= nextCheckDate) {
        checkLicenseValidity();
        localStorage.setItem(
          "lastCheckedUpdateDate",
          currentDate.toISOString()
        );
      }
    }
  }, [setLicenseActivated]);
};

export default useCheckLicenseValidity;

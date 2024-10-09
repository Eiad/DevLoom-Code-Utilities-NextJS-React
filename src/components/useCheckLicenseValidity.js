import { useEffect } from "react";
import { useRouter } from "next/router";

const useCheckLicenseValidity = (setLicenseActivated) => {
  const router = useRouter();

  useEffect(() => {
    const isOnline = () => navigator.onLine;

    const checkLicenseValidity = async () => {
      const licenseKey = localStorage.getItem("LicenseKey");
      const usageID = localStorage.getItem("usageID");

      if (licenseKey && usageID && isOnline()) {
        try {
          const res = await fetch("https://www.devloom.net/api/verifyLicense", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ licenseKey, usageID }),
          });

          if (res.ok) {
            setLicenseActivated(true);
          } else {
            localStorage.clear();
            router
              .push("/LicenseDeactivated")
              .then(() => window.location.reload());
          }
        } catch (error) {
          console.error("Error verifying license:", error);
        }
      }
    };

    const activationStatus = localStorage.getItem("Devloom");
    const lastCheckedUpdateDate = localStorage.getItem("lastCheckedUpdateDate");

    if (activationStatus === "Activated") {
      setLicenseActivated(true);
      const currentDate = new Date();
      const nextCheckDate = new Date(lastCheckedUpdateDate);
      nextCheckDate.setDate(nextCheckDate.getDate() + 30);

      if (!lastCheckedUpdateDate || currentDate >= nextCheckDate) {
        checkLicenseValidity();
        localStorage.setItem(
          "lastCheckedUpdateDate",
          currentDate.toISOString()
        );
      }
    }
  }, [setLicenseActivated, router]);
};

export default useCheckLicenseValidity;

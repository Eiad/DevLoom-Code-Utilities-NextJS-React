import { useEffect } from "react";
import { useRouter } from "next/router";

// Custom hook to check the validity of the license.
const useCheckLicenseValidity = (setLicenseActivated) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is online.
    const isOnline = () => navigator.onLine;

    // Async function to validate the license.
    const checkLicenseValidity = async () => {
      // Retrieve license and usage information from localStorage.
      const licenseKey = localStorage.getItem("LicenseKey");
      const usageID = localStorage.getItem("usageID");

      // If the license key and usage ID exist and the user is online, verify the license.
      if (licenseKey && usageID && isOnline()) {
        try {
          // Make an API call to verify the license.
          const res = await fetch("https://www.devloom.net/api/verifyLicense", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ licenseKey, usageID }),
          });

          // If response is OK, set the license as activated.
          if (res.ok) {
            setLicenseActivated(true);
          } else {
            // If not, clear localStorage and redirect the user.
            localStorage.clear();
            router
              .push("/LicenseDeactivated")
              .then(() => window.location.reload());
          }
        } catch (error) {
          // Log and handle any errors during the license verification process.
          console.error("Error verifying license:", error);
        }
      }
    };

    // Retrieve the activation status and last checked update date from localStorage.
    const activationStatus = localStorage.getItem("Devloom");
    const lastCheckedUpdateDate = localStorage.getItem("lastCheckedUpdateDate");

    // If the activation status is 'Activated', keep the license activated.
    if (activationStatus === "Activated") {
      setLicenseActivated(true);
      const currentDate = new Date();
      const nextCheckDate = new Date(lastCheckedUpdateDate);
      nextCheckDate.setDate(nextCheckDate.getDate() - 1);

      // Check the license validity if it's the right time to do so.
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

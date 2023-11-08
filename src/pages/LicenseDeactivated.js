import React from "react";
import Head from "next/head";
import "../app/css/license-page.css";

const LicenseDeactivated = () => {
  return (
    <>
      <Head>
        <title>License Deactivated - DevLoom</title>
        <meta name="description" content="License Deactivated Page" />
      </Head>
      <div className="license-deactivated-container">
        <h1 className="deactivated-header">License Deactivated</h1>
        <p className="deactivated-message">
          Your license has been activated or is used on another machine.
        </p>
        <p className="deactivated-instruction">
          If you believe this is an error, kindly contact us via your Gumroad
          account and we account and we&#39;ll help out! ll help out!
        </p>
      </div>
    </>
  );
};

export default LicenseDeactivated;

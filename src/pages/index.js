import AllFormatters from "../components/formatters/AllFormatters";

function HomePage({ licenseActivated }) {
  return (
    <>
      <div className="top-section">
        <h1>
          Meet DevLoom - The All-in-One Dev Utilities App - No Ads - No Trackers - No Bullshit!
        </h1>
        <p>
        Streamline your development workflow with DevLoom&#39;s comprehensive suite of dev utilities. Effortlessly format, convert, encode, preview and debug code for HTML, CSS, JavaScript, JSON, YAML, and more.
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>
      <AllFormatters />
      {/* Full access home page content */}
      {/* {licenseActivated ? (
        <AllFormatters />
      ) : (
        // Demo access home page content
        <div>This content is visible when the license is not activated.</div>
      )} */}
    </>
  );
}

export default HomePage;

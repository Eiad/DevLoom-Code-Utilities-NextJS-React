import AllFormatters from "../components/formatters/AllFormatters";

function HomePage({ licenseActivated }) {
  return (
    <>
      <div className="top-section">
        <h1>
          Meet DevLoom: Every Developer&#39;s Ultimate Toolkit - Online and Free
        </h1>
        <p>
          Explore DevLoom, the ultimate destination for multi-language code
          formatting, encoding, and conversion. Perfect your codes from HTML,
          CSS, JavaScript, JSON, Base64, and more. Seamlessly switch between
          diverse formats and elevate every coding session.
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

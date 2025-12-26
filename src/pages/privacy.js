import "../app/css/contact-us.css";

function Privacy() {
  return (
    <>
      <div className="top-section">
        <h1>Privacy Policy</h1>
        <p>Last updated: December 26, 2024</p>
      </div>
      <div id="contact" className="text-center" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2>Overview</h2>
        <p>
          DevLoom is committed to protecting your privacy. This Privacy Policy explains how we handle
          information when you use our application.
        </p>

        <h2>Data Collection</h2>
        <p>
          <strong>We do not collect any personal data.</strong> DevLoom is designed with privacy as a
          core principle:
        </p>
        <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
          <li>All code formatting, conversion, and processing happens locally on your device</li>
          <li>Your code never leaves your computer</li>
          <li>We do not use analytics or tracking tools</li>
          <li>We do not collect usage statistics</li>
          <li>We do not use cookies for tracking purposes</li>
        </ul>

        <h2>License Validation</h2>
        <p>
          The only network communication occurs during license activation and periodic license
          verification. This process only transmits:
        </p>
        <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
          <li>Your license key (provided by you)</li>
          <li>A unique device identifier (generated locally)</li>
        </ul>
        <p>
          This information is used solely to validate your license and is not shared with third parties.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          DevLoom does not integrate with any third-party analytics, advertising, or tracking services.
          Your coding activities remain completely private.
        </p>

        <h2>Data Storage</h2>
        <p>
          Any preferences or settings you configure are stored locally on your device using browser
          local storage. This data never leaves your device.
        </p>

        <h2>Children&#39;s Privacy</h2>
        <p>
          DevLoom does not knowingly collect any information from children under 13 years of age.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be reflected on this
          page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:support@devloom.net">support@devloom.net</a>.
        </p>
      </div>
    </>
  );
}

export default Privacy;

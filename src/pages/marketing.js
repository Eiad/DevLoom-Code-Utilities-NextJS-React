import "../app/css/contact-us.css";
import Image from "next/image";

function Marketing() {
  return (
    <>
      <div className="top-section">
        <h1>DevLoom - Developer Utilities Toolkit</h1>
        <p style={{ fontSize: '1.3em', marginBottom: '10px' }}>
          Format, Convert, Debug - All in One Place
        </p>
        <p className="get-started">No Ads • No Trackers • Works Offline</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>

        <section style={{ marginBottom: '50px', textAlign: 'center' }}>
          <h2 style={{ color: '#4a9eff', marginBottom: '20px' }}>Why DevLoom?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'left' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '12px' }}>
              <h3>Privacy First</h3>
              <p>Your code never leaves your device. All processing happens locally - no servers, no tracking, no data collection.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '12px' }}>
              <h3>Works Offline</h3>
              <p>No internet required. Use DevLoom anywhere - on a plane, in a coffee shop, or in a secure environment.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '12px' }}>
              <h3>All-in-One</h3>
              <p>Stop switching between different tools. DevLoom combines 20+ utilities in one beautiful, fast application.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: '#4a9eff', marginBottom: '20px', textAlign: 'center' }}>Features</h2>

          <div style={{ marginBottom: '30px' }}>
            <h3>Code Formatters</h3>
            <p style={{ color: '#aaa' }}>
              Beautify and format code in multiple languages with proper indentation and syntax.
            </p>
            <ul style={{ columns: 2, columnGap: '40px' }}>
              <li>HTML Formatter</li>
              <li>CSS Formatter</li>
              <li>JavaScript Formatter</li>
              <li>JSON Formatter</li>
              <li>XML Formatter</li>
              <li>TypeScript Formatter</li>
              <li>GraphQL Formatter</li>
              <li>LESS Formatter</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Converters</h3>
            <p style={{ color: '#aaa' }}>
              Transform data between different formats instantly.
            </p>
            <ul style={{ columns: 2, columnGap: '40px' }}>
              <li>JSON to YAML</li>
              <li>YAML to JSON</li>
              <li>HTML to JSX</li>
              <li>Base64 Encoder/Decoder</li>
              <li>Base64 Image Encoder</li>
              <li>Numeric Base Converter</li>
              <li>String Case Converter</li>
              <li>HTML Entity Encoder</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Previewers & Debuggers</h3>
            <p style={{ color: '#aaa' }}>
              Preview and debug your code in real-time.
            </p>
            <ul>
              <li>HTML Live Previewer</li>
              <li>Markdown Previewer with syntax highlighting</li>
              <li>RegExp Tester with real-time matching</li>
              <li>Lorem Ipsum Generator</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '50px', textAlign: 'center' }}>
          <h2 style={{ color: '#4a9eff', marginBottom: '20px' }}>Built for macOS</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#aaa' }}>
            DevLoom is a native macOS application built with modern technologies.
            It&#39;s fast, lightweight, and integrates seamlessly with your development workflow.
          </p>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px 25px', borderRadius: '8px' }}>
              <strong>Universal Binary</strong>
              <p style={{ fontSize: '0.9em', color: '#aaa', margin: '5px 0 0' }}>Intel & Apple Silicon</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px 25px', borderRadius: '8px' }}>
              <strong>macOS 12+</strong>
              <p style={{ fontSize: '0.9em', color: '#aaa', margin: '5px 0 0' }}>Monterey and later</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px 25px', borderRadius: '8px' }}>
              <strong>Lightweight</strong>
              <p style={{ fontSize: '0.9em', color: '#aaa', margin: '5px 0 0' }}>Under 15MB</p>
            </div>
          </div>
        </section>

        <section style={{ textAlign: 'center', padding: '40px', background: 'rgba(74, 158, 255, 0.1)', borderRadius: '16px', marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '15px' }}>Get DevLoom Today</h2>
          <p style={{ color: '#aaa', marginBottom: '25px' }}>
            Available on the Mac App Store
          </p>
          <a
            href="https://apps.apple.com/app/devloom-code-utilities/id6472153898"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#4a9eff',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1em'
            }}
          >
            Download on Mac App Store
          </a>
        </section>

        <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ color: '#4a9eff', marginBottom: '20px' }}>Need Help?</h2>
          <p>
            Contact us at <a href="mailto:support@devloom.net">support@devloom.net</a>
          </p>
          <div style={{ marginTop: '20px' }}>
            <a href="/privacy" style={{ marginRight: '20px' }}>Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </section>

      </div>
    </>
  );
}

export default Marketing;

import "../app/css/contact-us.css";

function Terms() {
  return (
    <>
      <div className="top-section">
        <h1>Terms of Service</h1>
        <p>Last updated: December 26, 2024</p>
      </div>
      <div id="contact" className="text-center" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using DevLoom (&#34;the Application&#34;), you agree to be bound
          by these Terms of Service. If you do not agree to these terms, do not use the Application.
        </p>

        <h2>2. License Grant</h2>
        <p>
          Upon purchase and activation, DevLoom grants you a limited, non-exclusive, non-transferable
          license to use the Application on devices you own or control, subject to these Terms.
        </p>

        <h2>3. Restrictions</h2>
        <p>You agree not to:</p>
        <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
          <li>Copy, modify, or distribute the Application</li>
          <li>Reverse engineer, decompile, or disassemble the Application</li>
          <li>Rent, lease, or lend the Application to third parties</li>
          <li>Use the Application for any unlawful purpose</li>
          <li>Remove or alter any proprietary notices or labels</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          The Application, including all content, features, and functionality, is owned by DevLoom
          and is protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          THE APPLICATION IS PROVIDED &#34;AS IS&#34; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          IN NO EVENT SHALL DEVLOOM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
          OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL,
          OR OTHER INTANGIBLE LOSSES.
        </p>

        <h2>7. Code Processing</h2>
        <p>
          All code formatting, conversion, and processing performed by the Application occurs locally
          on your device. DevLoom does not access, store, or transmit your code to any external servers.
          You are solely responsible for the code you process using the Application.
        </p>

        <h2>8. Updates</h2>
        <p>
          DevLoom may release updates to the Application from time to time. These updates may include
          bug fixes, new features, or security improvements. Continued use of the Application after
          updates constitutes acceptance of any modified terms.
        </p>

        <h2>9. Termination</h2>
        <p>
          DevLoom reserves the right to terminate or suspend your license to use the Application at
          any time, without prior notice, for conduct that DevLoom believes violates these Terms or
          is harmful to other users or DevLoom.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
          in which DevLoom operates, without regard to its conflict of law provisions.
        </p>

        <h2>11. Changes to Terms</h2>
        <p>
          DevLoom reserves the right to modify these Terms at any time. We will notify users of any
          material changes by updating the &#34;Last updated&#34; date at the top of this page.
        </p>

        <h2>12. Contact Information</h2>
        <p>
          For questions about these Terms of Service, please contact us at{" "}
          <a href="mailto:support@devloom.net">support@devloom.net</a>.
        </p>
      </div>
    </>
  );
}

export default Terms;

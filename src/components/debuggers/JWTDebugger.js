// Importing necessary hooks and modules from React and CryptoJS
import React, { useState, useEffect } from "react";
import * as CryptoJS from "crypto-js";
// Importing the JWT Debugger styles
import "../../app/css/jwt-debugger.css";

// The main JWTDebugger functional component
const JWTDebugger = () => {
  // State management for header, payload, and secret of JWT preloaded sample
  const [header, setHeader] = useState({ alg: "HS256", typ: "JWT" });
  const [payload, setPayload] = useState({
    sub: "demo12345",
    name: "Demo User",
    iat: 1619100000,
  });
  const [secret, setSecret] = useState("demoSecret123");

  // Algorithm selection for hashing
  const [algorithm, setAlgorithm] = useState("HS256");

  // State for managing button text for copying the generated JWT
  const [copyBtnTextGeneratedJWT, setCopyBtnTextGeneratedJWT] =
    useState("Copy");
  const [copyBtnTextDecodedHeader, setCopyBtnTextDecodedHeader] =
    useState("Copy");
  const [copyBtnTextDecodedPayload, setCopyBtnTextDecodedPayload] =
    useState("Copy");

  // Function to handle the copy to clipboard action and change button text temporarily
  const handleCopyText = (text, setCopyBtnTextFunction) => {
    navigator.clipboard.writeText(text);
    setCopyBtnTextFunction("Copied!");
    // Revert button text back to "Copy" after 2 seconds
    setTimeout(() => {
      setCopyBtnTextFunction("Copy");
    }, 2000);
  };

  // Mapping algorithm names to the corresponding functions in CryptoJS
  const algorithms = {
    HS256: CryptoJS.HmacSHA256,
    HS384: CryptoJS.HmacSHA384,
    HS512: CryptoJS.HmacSHA512,
  };

  // Effect hook to update the header's algorithm whenever the selected algorithm changes
  useEffect(() => {
    setHeader((prevHeader) => ({
      ...prevHeader,
      alg: algorithm,
    }));
  }, [algorithm]);

  // Helper function to encode data to Base64URL
  const base64UrlEncode = (input) => {
    var output = CryptoJS.enc.Base64.stringify(input);
    output = output.split("=")[0];
    output = output.replace("+", "-");
    output = output.replace("/", "_");
    return output;
  };

  // Helper function to decode Base64URL data
  const base64UrlDecode = (input) => {
    var output = input;
    output = output.replace("-", "+");
    output = output.replace("_", "/");
    // Adds padding ('=') based on the length of the string to make it a multiple of 4
    switch (output.length % 4) {
      case 0:
        break; // No padding needed
      case 2:
        output += "==";
        break; // Two '=' signs needed
      case 3:
        output += "=";
        break; // One '=' sign needed
      default:
        throw "Illegal base64url string!"; // Throws error for invalid strings
    }
    return CryptoJS.enc.Base64.parse(output).toString(CryptoJS.enc.Utf8);
  };

  // Getting the corresponding signature function based on the selected algorithm
  const signatureFunction = algorithms[algorithm];
  // Encoding the header and payload parts of the JWT
  const encodedHeader = base64UrlEncode(
    CryptoJS.enc.Utf8.parse(JSON.stringify(header))
  );
  const encodedPayload = base64UrlEncode(
    CryptoJS.enc.Utf8.parse(JSON.stringify(payload))
  );
  // Generating the signature part of the JWT
  const signature = signatureFunction(
    encodedHeader + "." + encodedPayload,
    secret
  );
  const encodedSignature = base64UrlEncode(signature);

  // Concatenates header, payload, and signature to form the complete JWT
  const jwt = `${encodedHeader}.${encodedPayload}.${encodedSignature}`;

  // useState hooks for managing the state of the token verification section
  const [token, setToken] = useState(jwt);
  const [verifySecret, setVerifySecret] = useState(secret);
  const [verificationResult, setVerificationResult] = useState(
    "Verification successful!"
  );
  const [decodedHeader, setDecodedHeader] = useState("");
  const [decodedPayload, setDecodedPayload] = useState("");

  // Function to handle JWT verification
  const handleVerifyJWT = () => {
    const [header, payload, providedSignature] = token.split(".");
    const computedSignature = base64UrlEncode(
      signatureFunction(`${header}.${payload}`, verifySecret)
    );

    if (providedSignature === computedSignature) {
      setVerificationResult("Verification successful!");
    } else {
      setVerificationResult("Verification failed");
    }
  };

  // Function to decode a JWT and update the decoded header and payload states
  const handleDecodeJWT = (jwt) => {
    try {
      const [header, payload] = jwt.split("."); // Splits the jwt into header and payload
      setDecodedHeader(JSON.parse(base64UrlDecode(header))); // Decodes and sets the header
      setDecodedPayload(JSON.parse(base64UrlDecode(payload))); // Decodes and sets the payload
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  };

  // JWT debugger UI components
  return (
    <>
      <section className="jwt-container">
        {/* Component 1 */}
        <div className="jwt-header">
          <h2>JWT Verification</h2>
          <p>
            Verify the authenticity of your JWT by providing the secret key and
            token.
          </p>
        </div>

        <div className="jwt-container-type-1">
          <div className="jwd-verification-inputs">
            <label>
              Enter your secret key
              <input
                value={verifySecret}
                onChange={(e) => setVerifySecret(e.target.value)}
                placeholder="Enter Secret Key"
              />
            </label>
            <label>
              Add your JWT string
              <textarea
                value={token}
                className="full-jwt-show"
                onChange={(e) => setToken(e.target.value)}
                placeholder="Paste Your JWT Here"
              />
            </label>
            <button onClick={handleVerifyJWT}>Verify Token</button>
          </div>
          <div className="verification-submit">
            <p
              className={`jwt-verify-msg ${
                verificationResult === "Verification successful!"
                  ? ""
                  : "failed"
              }`}
            >
              {verificationResult}
            </p>
          </div>
        </div>
        {/* Component 2 */}
        <div className="jwt-header">
          <h2>Create JWT</h2>
          <p>Input the required details to generate a JWT.</p>
        </div>
        <div className="jwt-container-type-2">
          <div className="jwt-input-container">
            <label className="alg-selector">
              Select Algorithm:
              <select
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
              >
                <option value="HS256">HS256</option>
                <option value="HS384">HS384</option>
                <option value="HS512">HS512</option>
              </select>
            </label>
            <h4>Enter Secret Key</h4>
            <input
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Secret Key"
            />
            <h4>Enter JWT Header</h4>
            <textarea
              value={JSON.stringify(header, null, 2)}
              onChange={(e) => setHeader(JSON.parse(e.target.value))}
            />
            <h4>Enter JWT Payload</h4>
            <textarea
              value={JSON.stringify(payload, null, 2)}
              onChange={(e) => setPayload(JSON.parse(e.target.value))}
            />
          </div>
          <div className="jwt-output-container text-center">
            <h3>Generated JWT Token</h3>
            <h4>Your JWT Token</h4>
            <textarea
              className="full-jwt-show"
              value={`${encodedHeader}.${encodedPayload}.${encodedSignature}`}
              readOnly
            />
            <button
              className="btn-copy"
              onClick={() =>
                handleCopyText(
                  `${encodedHeader}.${encodedPayload}.${encodedSignature}`,
                  setCopyBtnTextGeneratedJWT
                )
              }
            >
              {copyBtnTextGeneratedJWT}
            </button>
          </div>
        </div>
        {/* Component 3 */}
        <div className="jwt-header">
          <h2>JWT Decoding</h2>
          <p>Decode an existing JWT to reveal its header and payload.</p>
        </div>
        <div className="jwt-container-type-2">
          <div className="jwt-output-container text-center">
            <textarea
              className="decode-input-area"
              placeholder="Paste JWT for Decoding"
              onChange={(e) => handleDecodeJWT(e.target.value)}
            />
          </div>
          <div className="jwt-input-container">
            <h4>Decoded JWT Header</h4>
            <textarea readOnly value={JSON.stringify(decodedHeader, null, 2)} />
            <button
              className="btn-copy"
              onClick={() =>
                handleCopyText(
                  JSON.stringify(decodedHeader, null, 2),
                  setCopyBtnTextDecodedHeader
                )
              }
            >
              {copyBtnTextDecodedHeader}
            </button>
            <h4>Decoded JWT Payload</h4>
            <textarea
              readOnly
              value={JSON.stringify(decodedPayload, null, 2)}
            />
            <button
              className="btn-copy"
              onClick={() =>
                handleCopyText(
                  JSON.stringify(decodedPayload, null, 2),
                  setCopyBtnTextDecodedPayload
                )
              }
            >
              {copyBtnTextDecodedPayload}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JWTDebugger;

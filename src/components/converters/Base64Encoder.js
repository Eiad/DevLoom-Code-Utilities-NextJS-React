import React, { useState } from "react";
import "../../app/base64-page.css";

function Base64Encoder() {
  // State variables to manage input, encoded/decoded output,
  // copy status, output visibility, processing status, and encode/decode mode
  const [inputText, setInputText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [encodeMode, setEncodeMode] = useState(true); // true for encoding, false for decoding

  // Handle input text change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Trigger the encode or decode function based on the selected mode
  const handleEncodeDecodeClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      encodeMode ? encodeToBase64() : decodeFromBase64();
      setIsProcessing(false);
    }, 300);
  };

  // Encode the provided text to Base64 format
  const encodeToBase64 = () => {
    const result = btoa(inputText);
    setEncodedText(result);
    setShowOutput(true);
  };

  // Decode the provided Base64 string back to text
  const decodeFromBase64 = () => {
    try {
      const result = atob(inputText);
      setEncodedText(result);
      setShowOutput(true);
    } catch {
      alert("Invalid Base64 encoded string.");
      setShowOutput(false);
    }
  };

  // Handle copying the encoded/decoded text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(encodedText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="main-body">
      <div className="formatter-page base64-encoder-page">
        <h1 className="text-center">DevLoom Base64 Encoder/Decoder</h1>
        {/* Radio buttons to choose between encoding and decoding */}
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="encode"
              checked={encodeMode}
              onChange={() => setEncodeMode(true)}
            />
            Encode
          </label>
          <label>
            <input
              type="radio"
              value="decode"
              checked={!encodeMode}
              onChange={() => setEncodeMode(false)}
            />
            Decode
          </label>
        </div>
        <div className="input-section text-center">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder={"Paste / Type here..."}
          />
        </div>

        {/* Button to trigger encoding/decoding */}
        <button
          onClick={handleEncodeDecodeClick}
          disabled={!inputText.trim() || isProcessing}
        >
          {isProcessing ? "Processing..." : encodeMode ? "Encode" : "Decode"}
        </button>

        {/* Display the encoded/decoded output */}
        {showOutput && (
          <div className="output-section">
            <h3 className="text-center">Output</h3>
            <div className="pre-container">
              <pre className="language-text">
                <code className="language-text">{encodedText}</code>
              </pre>
              <button onClick={handleCopy}>
                {isCopied ? "Copied!" : "Copy Text"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Base64Encoder;

import React, { useState } from "react";
import "../../app/css/base64-page.css";

function Base64Encoder() {
  // State variables to manage input, encoded/decoded output,
  // copy status, output visibility, processing status, and encode/decode mode
  const [inputText, setInputText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [encodeMode, setEncodeMode] = useState(true); // true for encoding, false for decoding
  const [placeholderText, setPlaceholderText] = useState(
    "Add string to Encode"
  );

  // Handle input text change
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputText(inputValue);

    // If the input is cleared, hide the output and clear the encoded text
    if (!inputValue.trim()) {
      setEncodedText("");
      setShowOutput(false);
    }
  };

  // Handle encode/decode mode change
  const handleRadioChange = (encode) => {
    setEncodeMode(encode);
    setInputText("");
    setPlaceholderText(
      encode ? "Add string to Encode" : "Add string to Decode"
    );
    setShowOutput(false);
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
      <div className="base64-encoder-page">
        <h1 className="text-center">DevLoom Base64 Encoder/Decoder</h1>
        {/* Radio buttons to choose between encoding and decoding */}
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="encode"
              checked={encodeMode}
              onChange={() => handleRadioChange(true)}
            />
            Encode
          </label>
          <label>
            <input
              type="radio"
              value="decode"
              checked={!encodeMode}
              onChange={() => handleRadioChange(false)}
            />
            Decode
          </label>
        </div>
        <div className="input-section text-center">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder={placeholderText}
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

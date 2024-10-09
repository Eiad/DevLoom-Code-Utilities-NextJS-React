import React, { useState } from "react";
import "../../app/css/base64-page.css";

function Base64Encoder() {
  const [inputText, setInputText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [encodeMode, setEncodeMode] = useState(true);
  const [placeholderText, setPlaceholderText] = useState(
    "Add string to Encode"
  );

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputText(inputValue);

    if (!inputValue.trim()) {
      setEncodedText("");
      setShowOutput(false);
    }
  };

  const handleRadioChange = (encode) => {
    setEncodeMode(encode);
    setInputText("");
    setPlaceholderText(
      encode ? "Add string to Encode" : "Add string to Decode"
    );
    setShowOutput(false);
  };

  const handleEncodeDecodeClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      encodeMode ? encodeToBase64() : decodeFromBase64();
      setIsProcessing(false);
    }, 300);
  };

  const encodeToBase64 = () => {
    const result = btoa(inputText);
    setEncodedText(result);
    setShowOutput(true);
  };

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

        <button
          onClick={handleEncodeDecodeClick}
          disabled={!inputText.trim() || isProcessing}
        >
          {isProcessing ? "Processing..." : encodeMode ? "Encode" : "Decode"}
        </button>

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

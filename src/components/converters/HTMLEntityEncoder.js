import React, { useState } from "react";
import "../../app/css/base64-page.css";

function HTMLEntityEncoder() {
  const [inputText, setInputText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [encodeMode, setEncodeMode] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputText(inputValue);

    if (!inputValue.trim()) {
      setEncodedText("");
      setShowOutput(false);
    }
  };

  const handleEncodeDecodeClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      if (!inputText.trim()) {
        setShowOutput(false);
      } else {
        encodeMode ? encodeHTMLEntities() : decodeHTMLEntities();
      }
      setIsProcessing(false);
    }, 300);
  };

  const encodeHTMLEntities = () => {
    const result = inputText.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
      return "&#" + i.charCodeAt(0) + ";";
    });
    setEncodedText(result);
    setShowOutput(true);
  };

  const decodeHTMLEntities = () => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = inputText;
    const result = textArea.value;
    setEncodedText(result);
    setShowOutput(true);
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
        <h1 className="text-center">DevLoom HTML Entity Encoder/Decoder</h1>
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

export default HTMLEntityEncoder;

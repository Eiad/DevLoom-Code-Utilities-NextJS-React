import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-cshtml";
import "prismjs/components/prism-css";
import "prismjs/components/prism-less";
import Footer from "../Footer";

function FormatterContent(props) {
  const {
    inputCode,
    handleInputChange,
    formatCode,
    formattedCode,
    codeType,
    formatOption,
    setFormatOption, // New prop
  } = props;

  const [isCopied, setIsCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const highlightedCode = Prism.highlight(
    String(formattedCode),
    Prism.languages[codeType.toLowerCase()],
    codeType.toLowerCase()
  );

  useEffect(() => {
    setShowOutput(!!formattedCode);
  }, [formattedCode]);

  const handleFormatClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      formatCode();
    }, 500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <>
      <div className="main-body">
        <div className="formatter-page">
          <h1 className="text-center">{codeType} Formatter</h1>

          {/* New Dropdown for Format Options */}
          <div className="format-options">
            <label htmlFor="formatOption">Indentation level: </label>
            <select
              id="formatOption"
              value={formatOption}
              onChange={(e) => setFormatOption(e.target.value)}
            >
              <option value="1tab">1 Tab</option>
              <option value="2spaces">2 Spaces</option>
              <option value="4spaces">4 Spaces</option>
              <option value="no-Spaces">no-Spaces</option>
            </select>
          </div>

          <div className="input-section text-center">
            <textarea
              value={inputCode}
              onChange={handleInputChange}
              placeholder={`Copy-paste your ${codeType} here...`}
            />
          </div>

          {/* Button is disabled if textarea is empty or if it is processing */}
          <button
            onClick={handleFormatClick}
            disabled={!inputCode || isProcessing}
          >
            {isProcessing ? "Processing..." : `Format ${codeType}`}
          </button>

          {showOutput && (
            <div
              className={`output-section ${
                isProcessing ? "process-output" : ""
              }`}
            >
              <div className="output-content">
                <h2 className="text-center">Formatted Output</h2>
                <div className="pre-container">
                  <pre className={`language-${codeType.toLowerCase()}`}>
                    <code
                      className={`language-${codeType.toLowerCase()}`}
                      dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                  </pre>
                  <button onClick={handleCopy}>
                    {isCopied ? "Copied!" : "Click to Copy"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormatterContent;

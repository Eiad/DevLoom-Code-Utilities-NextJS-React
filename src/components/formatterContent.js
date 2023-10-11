import React, { useState, useEffect, useRef } from "react";
import * as prettier from "prettier/standalone";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-cshtml";
import "prismjs/components/prism-css";

function FormatterContent(props) {
  const { inputCode, handleInputChange, formatCode, formattedCode, codeType } =
    props;

  const [isClient, setIsClient] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    Prism.highlightAll();
  }, [formattedCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="formatter-page">
      <h1 className="text-center">{codeType} Formatter</h1>
      <div className="input-section text-center">
        <textarea
          value={inputCode}
          onChange={handleInputChange}
          placeholder={`Copy-paste your ${codeType} here...`}
        />
      </div>

      <button onClick={formatCode}>Format {codeType}</button>

      <div className="output-section">
        <h2>Formatted Output</h2>
        <div className="pre-container">
          {isClient && (
            <pre
              className={`language-${codeType.toLowerCase()}`}
              tabIndex={null}
            >
              <code
                ref={codeRef}
                className={`language-${codeType.toLowerCase()}`}
                tabIndex={null}
              >
                {formattedCode || (
                  <span className="results-placeholder">
                    Formatted result will appear here...
                  </span>
                )}
              </code>
            </pre>
          )}
          <button onClick={handleCopy}>
            {isCopied ? "Copied!" : "Click to Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormatterContent;

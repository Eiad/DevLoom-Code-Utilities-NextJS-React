import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../../app/highligh-styling.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import Footer from "../Footer";

function HTMLJSXConverter() {
  const [inputHTML, setInputHTML] = useState("");
  const [outputJSX, setOutputJSX] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (event) => {
    setInputHTML(event.target.value);
  };

  const handleConvertClick = () => {
    setIsProcessing(true); // Set processing state to true when conversion starts
    setTimeout(() => {
      convertHTMLToJSX();
      setIsProcessing(false); // Set processing state to false once conversion is done
    }, 500); // This simulates a half-second processing time
  };

  const convertHTMLToJSX = () => {
    let jsx = inputHTML;

    // Convert comments
    jsx = jsx.replace(/<!--(.*?)-->/g, "{/*$1*/}");

    // Convert class to className
    jsx = jsx.replace(/\bclass\b/g, "className");

    // Convert for to htmlFor
    jsx = jsx.replace(/\bfor\b/g, "htmlFor");

    // Convert inline styles to JSX style format
    jsx = jsx.replace(
      /style="([^"]+)"/g,
      (_, style) =>
        `style={{${style
          .split(";")
          .filter(Boolean)
          .map((s) => {
            const [key, value] = s.trim().split(":");
            const camelCaseKey = key
              .split("-")
              .map((word, index) =>
                index === 0 ? word : word[0].toUpperCase() + word.slice(1)
              )
              .join("");
            return `${camelCaseKey}: '${value.trim()}'`;
          })
          .join(", ")}}}`
    );

    // Convert inline event handlers to camelCase
    jsx = jsx.replace(/on(\w+)="([^"]+)"/g, (match, event, handler) => {
      // Special case for 'mouseover'
      if (event === "mouseover") {
        return `onMouseOver={${handler.replace(/\(\)/, "")}}`; // remove any parentheses from the handler
      }
      // Fallback for other event names
      const camelCaseEvent =
        "on" + event.charAt(0).toUpperCase() + event.slice(1);
      return `${camelCaseEvent}={() => ${handler}}`;
    });

    jsx = jsx.replace(/\b(checked|disabled|selected)="[^"]*"/g, "$1={true}");
    jsx = jsx.replace(/\b(checked|disabled|selected)(?!\={)/g, "$1={true}");

    // Ensure tags are self-closed
    jsx = jsx.replace(
      /<(img|input|br)([^>]*?)(\/?)>/g,
      (match, tag, attrs, slash) => {
        return slash ? match : `<${tag}${attrs}/>`;
      }
    );

    // Wrap the result in a <div>
    jsx = `<div>${jsx}</div>`;

    setOutputJSX(jsx);
    setShowOutput(true);
  };

  const highlightedCode = Prism.highlight(
    outputJSX,
    Prism.languages.jsx,
    "jsx"
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(outputJSX).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <>
      <div className="main-body">
        <div className="formatter-page">
          <h1 className="text-center">HTML to JSX Converter</h1>
          <div className="input-section text-center">
            <textarea
              value={inputHTML}
              onChange={handleInputChange}
              placeholder={"Copy-paste your HTML here..."}
            />
          </div>
          <button
            onClick={handleConvertClick}
            disabled={!inputHTML.trim() || isProcessing}
          >
            {isProcessing ? "Processing..." : "Convert"}
          </button>

          {showOutput && (
            <div className="output-section">
              <h2>JSX Output</h2>
              <div className="pre-container">
                <pre className="language-jsx">
                  <code
                    className="language-jsx"
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                  />
                </pre>
                <button onClick={handleCopy}>
                  {isCopied ? "Copied!" : "Copy JSX"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HTMLJSXConverter;

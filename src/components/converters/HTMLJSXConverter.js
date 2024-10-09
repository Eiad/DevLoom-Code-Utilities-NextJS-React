import React, { useState } from "react";
import Prism from "prismjs";
import "../../app/css/highligh-styling.css";
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
    setIsProcessing(true);
    setTimeout(() => {
      convertHTMLToJSX();
      setIsProcessing(false);
    }, 500);
  };

  const convertHTMLToJSX = () => {
    let jsx = inputHTML;

    jsx = jsx.replace(/<!--(.*?)-->/g, "{/*$1*/}");

    jsx = jsx.replace(/\bclass\b/g, "className");

    jsx = jsx.replace(/\bfor\b/g, "htmlFor");

    jsx = jsx.replace(
      /style="([^"]+)"/g,
      (_, style) => {
        return `style={{${
          style
            .split(";")
            .filter(Boolean)
            .map((s) => {
              const [key, value] = s.split(":").map((item) => item.trim());
              if (!key || !value) return "";

              const camelCaseKey = key
                .split("-")
                .map(
                  (word, index) =>
                    index === 0
                      ? word
                      : word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join("");

              return `${camelCaseKey}: '${value.replace(/'/g, "")}'`;
            })
            .filter(Boolean)
            .join(", ")
        }}}`; 
      }
    );

    jsx = jsx.replace(/on(\w+)="([^"]+)"/g, (match, event, handler) => {
      if (event === "mouseover") {
        return `onMouseOver={${handler.replace(/\(\)/, "")}}`;
      }
      const camelCaseEvent =
        "on" + event.charAt(0).toUpperCase() + event.slice(1);
      return `${camelCaseEvent}={() => ${handler}}`;
    });

    jsx = jsx.replace(/\b(checked|disabled|selected)="[^"]*"/g, "$1={true}");
    jsx = jsx.replace(/\b(checked|disabled|selected)(?!\={)/g, "$1={true}");

    jsx = jsx.replace(
      /<(img|input|br)([^>]*?)(\/?)>/g,
      (match, tag, attrs, slash) => {
        return
      }
    );

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

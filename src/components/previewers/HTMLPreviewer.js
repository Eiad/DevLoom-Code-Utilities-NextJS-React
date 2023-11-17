import React, { useState, useEffect } from "react";
import "../../app/css/previewers.css";
// Example HTML snippet to be used as the initial state
import { demoHtmlSnippet } from "../../constants/demo-constants";

function HTMLPreviewer() {
  const [htmlCode, setHtmlCode] = useState(demoHtmlSnippet);
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const DOMPurify = require("dompurify");
      setSanitizedHtml(DOMPurify.sanitize(htmlCode));
    }
  }, [htmlCode]);

  return (
    <>
      <div
        className={`previewer-container markdownpage-container ${
          htmlCode ? "preview-active" : ""
        }`}
      >
        <div className="previewer-left">
          <textarea
            placeholder="Paste your HTML code here..."
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
          />
        </div>
        <div
          className="previewer-right markdown-preview border-round"
          dangerouslySetInnerHTML={{
            __html: sanitizedHtml || "HTML is previewed here...",
          }}
        ></div>
      </div>
    </>
  );
}

export default HTMLPreviewer;

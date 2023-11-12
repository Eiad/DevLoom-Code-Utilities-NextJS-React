import React, { useState, useEffect } from "react";
import "../../app/css/previewers.css";
// Example HTML snippet to be used as the initial state
import { demoHtmlSnippet } from "../../constants/demo-constants";

function HTMLPreviewer() {
  const [htmlCode, setHtmlCode] = useState(demoHtmlSnippet);
  const [sanitizedHtml, setSanitizedHtml] = useState("");
  const textareaClassName = htmlCode
    ? "markdown-input border-round prev-active"
    : "markdown-input border-round";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const DOMPurify = require("dompurify");
      setSanitizedHtml(DOMPurify.sanitize(htmlCode));
    }
  }, [htmlCode]);

  return (
    <div className="markdownpage-container">
      <textarea
        placeholder="Paste your HTML code here..."
        className={textareaClassName}
        value={htmlCode}
        onChange={(e) => setHtmlCode(e.target.value)}
      />
      <div
        className="markdown-preview border-round"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml || "HTML preview..." }}
      ></div>
    </div>
  );
}

export default HTMLPreviewer;

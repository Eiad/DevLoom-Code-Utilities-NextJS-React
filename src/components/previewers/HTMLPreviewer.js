import React, { useState, useEffect } from "react";
import "../../app/css/previewers.css";

function HTMLPreviewer() {
  // Example HTML snippet to be used as the initial state
  const demoHtmlSnippet = `
<div style="background-color: #232d3f; color: #fff; padding: 20px; text-align: center;">
  <h1 class="color-white">Welcome to DevLoom HTML Previewer!</h1>
  <p class="color-yellow">
    This is a <strong>live preview</strong>. Try editing the HTML code to see
    changes here.
  </p>
</div>
<style>
  .color-yellow{color: yellow;}
  .color-white{color: #ffffff !important;}
</style>
  `;

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

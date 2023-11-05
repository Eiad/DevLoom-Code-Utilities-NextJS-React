import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "../../app/css/previewers.css";

function MARKDOWNPreviewer() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="markdownpage-container">
      <textarea
        placeholder="Paste your Markdown code here..."
        className="markdown-input border-round"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div className="markdown-preview border-round">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {markdown || "Markdown preview..."}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default MARKDOWNPreviewer;

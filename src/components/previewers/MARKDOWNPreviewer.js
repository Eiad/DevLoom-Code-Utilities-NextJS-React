import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "../../app/css/previewers.css";
// Example Markdown snippet to be used as the initial state
import { demoMarkdownSnippet } from "../../constants/demo-constants";

function MARKDOWNPreviewer() {
  const [markdown, setMarkdown] = useState(demoMarkdownSnippet);

  return (
    <div className="previewer-container">
      <div className="previewer-left markdown-input">
        <textarea
          placeholder="Paste your Markdown code here..."
          className="border-round"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div className="previewer-right markdown-preview border-round">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {markdown || "Markdown preview..."}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default MARKDOWNPreviewer;

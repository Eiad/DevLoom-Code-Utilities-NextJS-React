import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "../../app/css/previewers.css";

function MARKDOWNPreviewer() {
  // Example Markdown text
  const exampleMarkdown = `
# DevLoomMarkdown Previewer Demo

Welcome to the **Markdown Previewer**!

This tool allows you to write Markdown and see the preview live.

## Features

- **Bold** text
- _Italic_ text
- \`Code\` snippets
- [Links](https://example.com)
- Ordered and unordered lists

### Example List

1. Item one
2. Item two
    - Subitem 2.1
    - Subitem 2.2

Text typically aligns at 3-spaces in, as seen in
the continuation of point 3 from above.

A hyperlink to [an interesting site](https://example.com).

### Handy Tables ###

A simple table may look as follows:

dimension | fabric      | hue
--------- | ----------- | -----------
small     | cotton      | red
medium    | polyester   | blue
large     | wool        | green

Align columns using colons in the separator line:
- Left-align with a colon on the left
- Right-align with a colon on the right
- Center-align with colons on both sides

| Object    | Description | Price |
|:----------|:-----------:|------:|
| Notebook  | 256 pages   | $14   |
| Pen       | Blue ink    |   $1  |
| Lamp      | Desk light  |  $19  |



[^1]: This is the footnote.


Enjoy using the Markdown Previewer!



`;

  const [markdown, setMarkdown] = useState(exampleMarkdown);

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

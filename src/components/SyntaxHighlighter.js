import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-cshtml";
import "prismjs/components/prism-css";

function SyntaxHighlighter({ codeType, formattedCode }) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, [formattedCode]);

  return (
    <div className="pre-container">
      <pre className={`language-${codeType.toLowerCase()}`}>
        <code className={`language-${codeType.toLowerCase()}`}>
          {formattedCode}
        </code>
      </pre>
    </div>
  );
}

export default SyntaxHighlighter;

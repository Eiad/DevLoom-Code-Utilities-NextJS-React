import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-yaml";
import yaml from "js-yaml";

function JSONYAMLConverter() {
  const [inputJSON, setInputJSON] = useState("");
  const [outputYAML, setOutputYAML] = useState("");
  const [isCopiedYAML, setIsCopiedYAML] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleInputChange = (event) => {
    setInputJSON(event.target.value);
  };

  const handleConvertClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      convertJSONToYAML();
      setIsProcessing(false);
    }, 500);
  };

  const convertJSONToYAML = () => {
    try {
      const jsonObj = JSON.parse(inputJSON);
      const yamlString = yaml.dump(jsonObj);
      setOutputYAML(yamlString);
    } catch (error) {
      alert("Invalid JSON");
    }
  };

  const highlightedYAML = Prism.highlight(
    outputYAML,
    Prism.languages.yaml,
    "yaml"
  );

  const handleCopyYAML = () => {
    navigator.clipboard.writeText(outputYAML).then(() => {
      setIsCopiedYAML(true);
      setTimeout(() => setIsCopiedYAML(false), 2000); // Reset after 2 seconds
    });
  };

  useEffect(() => {
    setShowOutput(!!outputYAML);
  }, [outputYAML]);

  return (
    <div className="formatter-page">
      <h1 className="text-center">JSON to YAML Converter</h1>
      <div className="input-section text-center">
        <textarea
          value={inputJSON}
          onChange={handleInputChange}
          placeholder={`Paste your JSON here...`}
        />
      </div>
      <button onClick={handleConvertClick} disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Convert"}
      </button>

      {showOutput && (
        <div className="output-section">
          <h2>YAML Output</h2>
          <div className="pre-container">
            <pre className="language-yaml">
              <code
                className="language-yaml"
                dangerouslySetInnerHTML={{ __html: highlightedYAML }}
              />
            </pre>
            <button onClick={handleCopyYAML}>
              {isCopiedYAML ? "Copied!" : "Copy YAML"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JSONYAMLConverter;

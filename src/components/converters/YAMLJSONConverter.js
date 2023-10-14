import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-json";
import yaml from "js-yaml";
import Footer from "../Footer";

function YAMLJSONConverter() {
  const [inputYAML, setInputYAML] = useState("");
  const [outputJSON, setOutputJSON] = useState("");
  const [isCopiedJSON, setIsCopiedJSON] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleInputChange = (event) => {
    setInputYAML(event.target.value);
  };

  const handleConvertClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      convertYAMLToJSON();
      setIsProcessing(false);
    }, 500);
  };

  const convertYAMLToJSON = () => {
    try {
      const yamlObj = yaml.load(inputYAML);
      const jsonString = yamlObj ? JSON.stringify(yamlObj, null, 2) : "";
      setOutputJSON(jsonString);
    } catch (error) {
      alert("Invalid YAML");
    }
  };

  const highlightedJSON = outputJSON
    ? Prism.highlight(outputJSON, Prism.languages.json, "json")
    : "";

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(outputJSON).then(() => {
      setIsCopiedJSON(true);
      setTimeout(() => setIsCopiedJSON(false), 2000); // Reset after 2 seconds
    });
  };

  useEffect(() => {
    setShowOutput(!!outputJSON);
  }, [outputJSON]);

  return (
    <>
      <div className="main-body">
        <div className="formatter-page">
          <h1 className="text-center">YAML to JSON Converter</h1>
          <div className="input-section text-center">
            <textarea
              value={inputYAML}
              onChange={handleInputChange}
              placeholder={`Paste your YAML here...`}
            />
          </div>
          <button
            onClick={handleConvertClick}
            disabled={isProcessing || !inputYAML.trim().length}
          >
            {isProcessing ? "Processing..." : "Convert"}
          </button>

          {showOutput && (
            <div className="output-section">
              <h2>JSON Output</h2>
              <div className="pre-container">
                <pre className="language-json">
                  <code
                    className="language-json"
                    dangerouslySetInnerHTML={{ __html: highlightedJSON }}
                  />
                </pre>
                <button onClick={handleCopyJSON}>
                  {isCopiedJSON ? "Copied!" : "Copy JSON"}
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

export default YAMLJSONConverter;

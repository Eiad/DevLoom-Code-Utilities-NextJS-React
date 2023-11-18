import React, { useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import "../../app/css/lorem-page.css";

const LoremIpsum = () => {
  const [count, setCount] = useState(5);
  const [units, setUnits] = useState("paragraphs"); // or "words" or "sentences"
  const [generatedText, setGeneratedText] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy to Clipboard");

  const handleGenerate = () => {
    const text = loremIpsum({
      count: parseInt(count),
      units,
      format: "plain",
    });
    setGeneratedText(text);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopyButtonText("Copied!");

      // Reset the button text back to "Copy to Clipboard" after 2 seconds
      setTimeout(() => {
        setCopyButtonText("Copy to Clipboard");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="lorem-page-container">
      <div className="lorem-input">
        <div className="lorem-count-input">
          <p>Number of {units}</p>
          <input
            type="number"
            value={count}
            onChange={(e) => {
              let value = e.target.value;
              if (value > 1200) {
                value = 1200;
              }
              setCount(value);
            }}
            max="1200"
            placeholder="Number of generated items"
          />
        </div>
        <nav>
          <button
            onClick={() => setUnits("words")}
            className={units === "words" ? "selected-nav" : ""}
          >
            Words
          </button>
          <button
            onClick={() => setUnits("sentences")}
            className={units === "sentences" ? "selected-nav" : ""}
          >
            Sentences
          </button>
          <button
            onClick={() => setUnits("paragraphs")}
            className={units === "paragraphs" ? "selected-nav" : ""}
          >
            Paragraphs
          </button>
          <button className="lorem-generate" onClick={handleGenerate}>
            Generate
          </button>
        </nav>
      </div>
      <div className="lorem-output">
        <textarea value={generatedText} readOnly />
        <button className="lorem-copy" onClick={handleCopy}>
          {copyButtonText}
        </button>
      </div>
    </div>
  );
};

export default LoremIpsum;

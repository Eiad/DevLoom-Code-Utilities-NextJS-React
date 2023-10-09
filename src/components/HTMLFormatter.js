import React, { useState } from "react";
import * as prettier from "prettier/standalone";
import * as htmlParser from "prettier/parser-html";

function HTMLFormatter() {
  // States for capturing user input and displaying formatted code
  const [inputCode, setInputCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");

  // Function to update state when user types in the input textarea
  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  // Function to format the user's HTML input
  const formatHTMLCode = () => {
    try {
      const formatted = prettier.format(inputCode, {
        parser: "html",
        plugins: [htmlParser],
      });

      // Check if the formatted value is a Promise
      if (formatted instanceof Promise) {
        formatted.then((result) => {
          setFormattedCode(result);
        });
      } else {
        setFormattedCode(formatted);
      }
    } catch (error) {
      // Handle any errors during formatting
      alert(
        "There was an error formatting your code. Please check and try again."
      );
    }
  };

  return (
    <div className="formatter-container">
      {/* Input area for users to paste their HTML code */}
      <textarea
        value={inputCode}
        onChange={handleInputChange}
        placeholder="Copy-paste your HTML here..."
      />
      {/* Button to trigger the format operation */}
      <button onClick={formatHTMLCode}>Format HTML</button>
      {/* Readonly textarea to display the formatted code */}
      <textarea value={formattedCode} readOnly key={formattedCode} />
    </div>
  );
}

export default HTMLFormatter;

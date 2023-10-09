import React, { useState } from "react";
import * as prettier from "prettier/standalone";
import * as cssParser from "prettier/parser-postcss";
import FormatterContent from "./formatterContent"; // Import the component

function CSSFormatter() {
  // States for capturing user input and displaying formatted code
  const [inputCode, setInputCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");

  // Function to update state when user types in the input textarea
  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  // Function to format the user's CSS input
  const formatCSSCode = () => {
    try {
      const formatted = prettier.format(inputCode, {
        parser: "css",
        plugins: [cssParser],
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
    <FormatterContent
      inputCode={inputCode}
      handleInputChange={handleInputChange}
      formatCode={formatCSSCode}
      formattedCode={formattedCode}
      codeType="CSS"
    />
  );
}

export default CSSFormatter;

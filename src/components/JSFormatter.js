import React, { useState } from "react";
import * as prettier from "prettier/standalone";
import * as babelParser from "prettier/parser-babel";
import * as prettierEstree from "prettier/plugins/estree"; // Added the estree plugin
import FormatterContent from "./formatterContent"; // Import the component

function JSFormatter() {
  const [inputCode, setInputCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const formatJSCode = () => {
    try {
      const formatted = prettier.format(inputCode, {
        parser: "babel",
        plugins: [babelParser, prettierEstree], // Added the estree plugin here
      });

      if (formatted instanceof Promise) {
        formatted.then((result) => {
          setFormattedCode(result);
        });
      } else {
        setFormattedCode(formatted);
      }
    } catch (error) {
      alert(
        "There was an error formatting your code. Please check and try again."
      );
    }
  };

  return (
    <FormatterContent
      inputCode={inputCode}
      handleInputChange={handleInputChange}
      formatCode={formatJSCode}
      formattedCode={formattedCode}
      codeType="JS"
    />
  );
}

export default JSFormatter;

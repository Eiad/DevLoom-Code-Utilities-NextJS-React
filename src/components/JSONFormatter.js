import React, { useState } from "react";
import * as prettier from "prettier/standalone";
import * as babelParser from "prettier/parser-babel";
import * as prettierEstree from "prettier/plugins/estree";
import FormatterContent from "./formatterContent"; // Import the component

function JSONFormatter() {
  const [inputCode, setInputCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const formatJSONCode = () => {
    try {
      const formatted = prettier.format(inputCode, {
        parser: "json",
        plugins: [babelParser, prettierEstree],
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
      formatCode={formatJSONCode}
      formattedCode={formattedCode}
      codeType="JSON"
    />
  );
}

export default JSONFormatter;

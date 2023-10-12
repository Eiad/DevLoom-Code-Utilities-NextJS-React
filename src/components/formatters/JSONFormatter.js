import React, { useState } from "react";
import * as prettier from "prettier/standalone";
import * as babelParser from "prettier/parser-babel";
import * as prettierEstree from "prettier/plugins/estree";
import FormatterContent from "./formatterContent"; // Import the component

function JSONFormatter() {
  const [inputCode, setInputCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [formatOption, setFormatOption] = useState("2spaces");

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const formatJSONCode = () => {
    let tabWidth = 2;
    let useTabs = false;

    switch (formatOption) {
      case "1tab":
        tabWidth = 1;
        useTabs = true;
        break;
      case "2spaces":
        tabWidth = 2;
        break;
      case "4spaces":
        tabWidth = 4;
        break;
      case "no-Spaces":
        tabWidth = 0; // Using zero for full no spaces
        break;
      default:
        break;
    }

    try {
      const formatOptions = {
        parser: "json",
        plugins: [babelParser, prettierEstree],
        tabWidth: formatOption === "no-Spaces" ? 0 : tabWidth,
        useTabs: formatOption === "no-Spaces" ? false : useTabs,
        printWidth: formatOption === "no-Spaces" ? 10000 : 80,
        trailingComma: "none",
        bracketSpacing: formatOption !== "no-Spaces",
      };

      const formatted = prettier.format(inputCode, formatOptions);

      // Check if the formatted value is a Promise
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
      formatOption={formatOption}
      setFormatOption={setFormatOption}
    />
  );
}

export default JSONFormatter;

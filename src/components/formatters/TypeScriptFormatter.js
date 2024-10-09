import React, { useState } from "react";

import * as prettier from "prettier/standalone";
import * as typescriptParser from "prettier/parser-typescript";
import * as prettierEstree from "prettier/plugins/estree";
import FormatterContent from "./formatterContent";

function TypeScriptFormatter() {
  const [inputCode, setInputCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [formatOption, setFormatOption] = useState("2spaces");

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const formatTSCode = () => {
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
      case "no-Space":
        tabWidth = 0; 
        break;
      default:
        break;
    }

    try {
      const formatOptions = {
        parser: "typescript", 
        plugins: [typescriptParser, prettierEstree],
        tabWidth: formatOption === "no-Spaces" ? 0 : tabWidth,
        useTabs: formatOption === "no-Spaces" ? false : useTabs,
        printWidth: formatOption === "no-Spaces" ? 10000 : 80,
        semi: formatOption !== "no-Spaces", 
        singleQuote: false,
        bracketSpacing: formatOption !== "no-Spaces",
      };

      const formatted = prettier.format(inputCode, formatOptions);

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
      formatCode={formatTSCode}
      formattedCode={formattedCode}
      codeType="TypeScript"
      formatOption={formatOption}
      setFormatOption={setFormatOption}
    />
  );
}

export default TypeScriptFormatter;

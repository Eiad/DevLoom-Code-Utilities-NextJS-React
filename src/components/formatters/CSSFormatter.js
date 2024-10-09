import React, { useState } from "react";
import * as prettier from "prettier/standalone";
import * as cssParser from "prettier/parser-postcss";
import FormatterContent from "./formatterContent";

function CSSFormatter() {
  
  const [inputCode, setInputCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [formatOption, setFormatOption] = useState("2spaces");

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const formatCSSCode = () => {
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
        tabWidth = 2;
        break;
      default:
        break;
    }

    try {
      const formatOptions = {
        parser: "css",
        plugins: [cssParser],
        tabWidth: formatOption === "no-Spaces" ? 0 : tabWidth,
        useTabs: formatOption === "no-Spaces" ? false : useTabs,
        printWidth: formatOption === "no-Spaces" ? 10000 : 80,
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
      formatCode={formatCSSCode}
      formattedCode={formattedCode}
      codeType="CSS"
      formatOption={formatOption}
      setFormatOption={setFormatOption}
    />
  );
}

export default CSSFormatter;

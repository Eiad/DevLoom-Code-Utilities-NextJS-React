import React, { useState } from "react";
import * as prettier from "prettier/standalone";
import * as htmlParser from "prettier/parser-html";
import FormatterContent from "./formatterContent"; // Import the component

function HTMLFormatter() {
  // States for capturing user input and displaying formatted code
  const [inputCode, setInputCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [formatOption, setFormatOption] = useState("2spaces");

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  // Function to format the user's HTML input
  const formatHTMLCode = () => {
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
        parser: "html",
        plugins: [htmlParser],
        tabWidth: formatOption === "no-Spaces" ? 0 : tabWidth,
        useTabs: formatOption === "no-Spaces" ? false : useTabs,
        printWidth: formatOption === "no-Spaces" ? 10000 : 80,
        htmlWhitespaceSensitivity:
          formatOption === "no-Spaces" ? "ignore" : "css",
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
      formatCode={formatHTMLCode}
      formattedCode={formattedCode}
      codeType="HTML"
      formatOption={formatOption}
      setFormatOption={setFormatOption}
    />
  );
}

export default HTMLFormatter;

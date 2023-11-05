import React, { useState, useEffect, useCallback } from "react";
import DOMPurify from "dompurify";

const StringCaseConverter = () => {
  const [input, setInput] = useState("");
  const [caseType, setCaseType] = useState("camelCase");
  const [output, setOutput] = useState("");
  const [sanitizedOutput, setSanitizedOutput] = useState("");

  // Conversion functions
  const toCamelCase = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[_\-]+/g, " ")
      .toLowerCase()
      .replace(/ (.)/g, (match) => match.toUpperCase())
      .replace(/ /g, "")
      .replace(/^[A-Z]/, (match) => match.toLowerCase());
  };

  const toPascalCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
      .replace(/\s+/g, "");
  };

  const toSnakeCase = (str) => {
    return str.toLowerCase().replace(/\W+/g, "_");
  };

  const toKebabCase = (str) => {
    return str.toLowerCase().replace(/\W+/g, "-");
  };

  const toScreamingKebabCase = (str) => {
    return str.toUpperCase().replace(/\W+/g, "-");
  };

  const toConstantCase = (str) => {
    return str.toUpperCase().replace(/\W+/g, "_");
  };

  const toUpperCase = (str) => {
    return str.toUpperCase();
  };

  const toLowerCase = (str) => {
    return str.toLowerCase();
  };

  const toCapitalizedCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const toSentenceCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const toTitleCase = (str) => {
    return str
      .replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })
      .replace(/\s+/g, " ");
  };

  const toSlugCase = (str) => {
    return str.toLowerCase().replace(/\W+/g, "-");
  };

  const convertString = useCallback(() => {
    const convertLine = (line) => {
      switch (caseType) {
        case "camelCase":
          return toCamelCase(line);
        case "PascalCase":
          return toPascalCase(line);
        case "snake_case":
          return toSnakeCase(line);
        case "kebab-case":
          return toKebabCase(line);
        case "SCREAM-KEBAB":
          return toScreamingKebabCase(line);
        case "CONSTANT_CASE":
          return toConstantCase(line);
        case "UPPER CASE":
          return toUpperCase(line);
        case "lower case":
          return toLowerCase(line);
        case "Capitalized Case":
          return toCapitalizedCase(line);
        case "Sentence case":
          return toSentenceCase(line);
        case "Title Case (APA Convention)":
          return toTitleCase(line);
        case "url-friendly-slug-case":
          return toSlugCase(line);
        default:
          return line;
      }
    };

    const convertedLines = input.split("\n").map(convertLine);
    setOutput(convertedLines.join("\n"));
  }, [input, caseType]);

  useEffect(() => {
    convertString();
  }, [convertString]);

  useEffect(() => {
    setSanitizedOutput(DOMPurify.sanitize(output));
  }, [output]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCaseChange = (e) => {
    setCaseType(e.target.value);
  };

  return (
    <div className="string-case-converter">
      <div className="case-list-container">
        <div className="case-list-selector">
          <h4>Select Case type</h4>
          <select
            className="border-round"
            value={caseType}
            onChange={handleCaseChange}
          >
            <option value="camelCase">camelCase</option>
            <option value="PascalCase">PascalCase</option>
            <option value="snake_case">snake_case</option>
            <option value="kebab-case">kebab-case</option>
            <option value="SCREAM-KEBAB">SCREAM-KEBAB</option>
            <option value="CONSTANT_CASE">CONSTANT_CASE</option>
            <option value="UPPER CASE">UPPER CASE</option>
            <option value="lower case">lower case</option>
            <option value="Capitalized Case">Capitalized Case</option>
            <option value="Sentence case">Sentence case</option>
            <option value="Title Case (APA Convention)">
              Title Case (APA Convention)
            </option>
            <option value="url-friendly-slug-case">
              url-friendly-slug-case
            </option>
          </select>
        </div>
      </div>
      <div className="markdownpage-container">
        <textarea
          className="markdown-input border-round"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your string"
          rows="4"
          cols="50"
        />
        <div className="markdown-preview border-round">
          {sanitizedOutput.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              <span>{line}</span>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StringCaseConverter;

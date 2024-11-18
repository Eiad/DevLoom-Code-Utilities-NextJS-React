import React, { useState, useEffect, useCallback } from "react";
import DOMPurify from "dompurify";

const StringCaseConverter = () => {
  const demoString = `responseXMLParserKey
custom_event_summaries
SortedNaturalPost
propose-news-stream
That was a regular statement
aDetailedTextWithSmileys😊AndExoticLétters`;
  const [input, setInput] = useState(demoString);
  const [caseType, setCaseType] = useState("url-friendly-slug-case");
  const [output, setOutput] = useState("");
  const [sanitizedOutput, setSanitizedOutput] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const [isCopyButtonDisabled, setIsCopyButtonDisabled] = useState(true);

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
    return (
      str
        .replace(/[-_]+/g, " ")
        .replace(/\w\S*/g, (match) => {
          return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase();
        })
        .replace(/\s+/g, "")
    );
  };

  const toSnakeCase = (str) => {
    str = str.replace(/([a-z])([A-Z])|([A-Z])([A-Z][a-z])/g, "$1$3_$2$4");
    str = str.replace(/[\s\p{P}]+/gu, "_");
    return str.toLowerCase();
  };

  const toKebabCase = (str) => {
    let kebab = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    return kebab.replace(/[\s_]+|[^a-z0-9-\u0080-\uFFFF]/gi, "-");
  };

  const toScreamingKebabCase = (str) => {
    let kebab = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    kebab = kebab.replace(/[\s_]+|[^a-z0-9-\u0080-\uFFFF]/gi, "-");
    return kebab.toUpperCase();
  };

  const toConstantCase = (str) => {
    str = str.replace(/([a-z])([A-Z])/g, "$1_$2");
    str = str.toUpperCase();
    str = str.replace(/([^\w\_\u0080-\uFFFF]|_)+/g, "_");
    return str;
  };

  const toUpperCase = (str) => {
    return str.toUpperCase();
  };

  const toLowerCase = (str) => {
    return str.toLowerCase();
  };

  const toCapitalizedCase = (str) => {
    return str.toLowerCase().replace(/(^|_|-|\s)\w/g, (match) => {
      return match.toUpperCase();
    });
  };

  const toSentenceCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const toTitleCase = (str) => {
    return str
      .split(" ")
      .map((word) => {
        if (/_/.test(word) || /[a-z][A-Z]/.test(word)) {
          return word;
        } else if (/-/.test(word)) {
          return word
            .split("-")
            .map((part, index) => {
              if (index === 0) return part;
              return (
                part.charAt(0).toUpperCase() + part.substr(1).toLowerCase()
              );
            })
            .join("-");
        } else {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        }
      })
      .join(" ");
  };

  const toSlugCase = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\W+/g, "-");
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

  const handleCopy = () => {
    navigator.clipboard
      .writeText(sanitizedOutput)
      .then(() => {
        setCopyButtonText("Copied!");
        setTimeout(() => setCopyButtonText("Copy"), 2000);
      })
      .catch((err) => console.error("Error copying text: ", err));
  };

  useEffect(() => {
    setIsCopyButtonDisabled(input.trim() === "");
  }, [input]);

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
      <div className="previewer-container">
        <div className="previewer-left">
          <textarea
            className="markdown-input border-round"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter your string"
            rows="4"
            cols="50"
          />
        </div>
        <div className="previewer-right markdown-preview border-round">
          <div className="markdown-preview-area">
            {sanitizedOutput.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                <span>{line}</span>
                <br />
              </React.Fragment>
            ))}
          </div>
          <div className="copy-text text-right">
            <button onClick={handleCopy} disabled={isCopyButtonDisabled}>
              {copyButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringCaseConverter;
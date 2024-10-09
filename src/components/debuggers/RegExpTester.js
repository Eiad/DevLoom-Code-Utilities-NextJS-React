import React, { useState } from "react";
import DOMPurify from "dompurify";
import "../../app/css/regex-tester.css";
import { demoRegexString } from "../../constants/demo-constants";

const RegExpTester = () => {
  const [regex, setRegex] = useState("([A-Z])\\w+");
  const [testString, setTestString] = useState(demoRegexString);
  const [matches, setMatches] = useState([]);
  const [hasTested, setHasTested] = useState(false);
  const [highlightedString, setHighlightedString] = useState("");
  const [error, setError] = useState("");

  const handleRegexChange = (e) => {
    setRegex(e.target.value);
  };

  const handleTestStringChange = (e) => {
    setTestString(e.target.value);
  };

  const testRegExp = () => {
    setError("");
    setHasTested(true);
    try {
      const regexObj = new RegExp(regex, "gu");
      const matchResults = [...testString.matchAll(regexObj)];

      let lastIndex = 0;
      let resultString = [];

      matchResults.forEach((match) => {
        resultString.push(testString.slice(lastIndex, match.index));
        resultString.push(`<span class="highlight">${match[0]}</span>`);
        lastIndex = match.index + match[0].length;
      });

      resultString.push(testString.slice(lastIndex));

      setMatches(matchResults.map((match) => match[0]));
      setHighlightedString(DOMPurify.sanitize(resultString.join("")));
    } catch (error) {
      setError("Invalid regular expression. Please check your syntax.");
      console.error("Invalid regular expression:", error);
      setMatches([]);
      setHighlightedString(DOMPurify.sanitize(testString));
    }
  };

  const isTestButtonDisabled = regex.length === 0 || testString.length === 0;

  const createMarkup = () => {
    return { __html: highlightedString };
  };

  return (
    <div className="regex-tester-container">
      <div className="regex-tester-header">
        <h1 className="text-center">RegExp Tester</h1>
      </div>
      <div className="regex-tester-form">
        <div className="form-group">
          <label htmlFor="regex">Regular Expression:</label>
          <input
            type="text"
            id="regex"
            placeholder="Enter your RegExp"
            value={regex}
            onChange={handleRegexChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="test-string">Test String:</label>
          <textarea
            id="test-string"
            placeholder="Enter string to test against RegExp"
            value={testString}
            onChange={handleTestStringChange}
          ></textarea>
        </div>
        <button
          id="test-regexp"
          onClick={testRegExp}
          disabled={isTestButtonDisabled}
        >
          Test RegExp
        </button>
        {error && <div className="error-message">{error}</div>}
      </div>
      {hasTested && !error && (
        <div className="regex-tester-results">
          <h2 className="text-center">Matches</h2>
          <div
            id="results"
            className="text-with-highlights border-round"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      )}
    </div>
  );
};

export default RegExpTester;

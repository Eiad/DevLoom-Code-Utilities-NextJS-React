import React, { useState } from "react";
import DOMPurify from "dompurify";
import "../../app/css/regex-tester.css";

// RegExpTester component to test regular expressions against a test string.
const RegExpTester = () => {
  const [regex, setRegex] = useState("([A-Z])\\w+");
  const demoString = `DevLoom assists you in accomplishing your small daily tasks effortlessly, requiring just a single click. It operates entirely without an internet connection and is open-source!
🛠️ Offline Functionality
   Put an end to the practice of pasting your JSON strings, JWT tokens, or any potentially sensitive data onto various online websites. DevLoom's application allows you to efficiently handle your minor tasks completely offline! Everything you input into the application stays securely on your device and never gets transmitted over the internet.`;

  // Default test string value set to your provided string.
  const [testString, setTestString] = useState(demoString);

  // State for storing matches found in the test string.
  const [matches, setMatches] = useState([]);
  // State to track if a test has been conducted.
  const [hasTested, setHasTested] = useState(false);
  // State for the highlighted string with matches.
  const [highlightedString, setHighlightedString] = useState("");
  // State for any error message.
  const [error, setError] = useState("");

  // Updates the regex state as the user types.
  const handleRegexChange = (e) => {
    setRegex(e.target.value);
  };

  // Updates the test string state as the user types.
  const handleTestStringChange = (e) => {
    setTestString(e.target.value);
  };

  // Function to test the regular expression against the test string.
  const testRegExp = () => {
    // Clear any existing errors before testing.
    setError("");
    setHasTested(true);
    try {
      // Create a RegExp object with global and unicode flags.
      const regexObj = new RegExp(regex, "gu");
      // Use matchAll to find all matches in the test string.
      const matchResults = [...testString.matchAll(regexObj)];

      // For building the highlighted string.
      let lastIndex = 0;
      let resultString = [];

      // Loop through matches to construct the highlighted string.
      matchResults.forEach((match) => {
        // Add non-matching text.
        resultString.push(testString.slice(lastIndex, match.index));
        // Add matching text with highlight span.
        resultString.push(`<span class="highlight">${match[0]}</span>`);
        lastIndex = match.index + match[0].length;
      });

      // Add any remaining text after the last match.
      resultString.push(testString.slice(lastIndex));

      // Update states with the matches and the highlighted string.
      setMatches(matchResults.map((match) => match[0]));
      setHighlightedString(DOMPurify.sanitize(resultString.join("")));
    } catch (error) {
      // Update error state and clear matches if the regular expression is invalid.
      setError("Invalid regular expression. Please check your syntax.");
      console.error("Invalid regular expression:", error);
      setMatches([]);
      setHighlightedString(DOMPurify.sanitize(testString));
    }
  };

  // Button is disabled if either regex or test string is empty.
  const isTestButtonDisabled = regex.length === 0 || testString.length === 0;

  // Function to safely create HTML markup for the highlighted string.
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
        {/* Display error message if there is an error */}
        {error && <div className="error-message">{error}</div>}
      </div>
      {/* Render the Matches section only if there's no error and a test has been conducted */}
      {hasTested && !error && (
        <div className="regex-tester-results">
          <h2 className="text-center">Matches</h2>
          {/* Render the highlighted string as HTML */}
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

import React, { useState } from "react";
import HTMLFormatter from "../components/HTMLFormatter";
import JSFormatter from "../components/JSFormatter";
import CSSFormatter from "../components/CSSFormatter";
import JSONFormatter from "../components/JSONFormatter";

function HomePage() {
  const [selectedFormatter, setSelectedFormatter] = useState("HTML"); // default formatter to display

  let ComponentToShow;
  switch (selectedFormatter) {
    case "JS":
      ComponentToShow = JSFormatter;
      break;
    case "CSS":
      ComponentToShow = CSSFormatter;
      break;
    case "JSON":
      ComponentToShow = JSONFormatter;
      break;
    default:
      ComponentToShow = HTMLFormatter;
  }

  return (
    <div className="home-page">
      <nav>
        <button onClick={() => setSelectedFormatter("HTML")}>HTML</button>
        <button onClick={() => setSelectedFormatter("JS")}>JS</button>
        <button onClick={() => setSelectedFormatter("CSS")}>CSS</button>
        <button onClick={() => setSelectedFormatter("JSON")}>JSON</button>
        {/* Add more formatters as needed */}
      </nav>

      <div id="formattersWindow">
        <ComponentToShow />
      </div>
    </div>
  );
}

export default HomePage;
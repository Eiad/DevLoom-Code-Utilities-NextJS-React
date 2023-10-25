import React, { useState } from "react";
import HTMLFormatter from "../components/formatters/HTMLFormatter";
import JSFormatter from "../components/formatters/JSFormatter";
import CSSFormatter from "../components/formatters/CSSFormatter";
import JSONFormatter from "../components/formatters/JSONFormatter";
import LESSFormatter from "../components/formatters/LESSFormatter";
import XMLFormatter from "../components/formatters/XMLFormatter";
import TypeScriptFormatter from "../components/formatters/TypeScriptFormatter";
import GraphQLFormatter from "../components/formatters/GraphQLFormatter";

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
    case "LESS":
      ComponentToShow = LESSFormatter;
      break;
    case "XML":
      ComponentToShow = XMLFormatter;
      break;
    case "TYPESCRIPT":
      ComponentToShow = TypeScriptFormatter;
      break;
    case "GRAPHQL":
      ComponentToShow = GraphQLFormatter;
      break;

    default:
      ComponentToShow = HTMLFormatter;
  }

  return (
    <>
      <div className="top-section">
        <h1>
          Meet DevLoom: Every Developer&#39;s Ultimate Toolkit - Online and Free
        </h1>
        <p>
          Explore DevLoom, the ultimate destination for multi-language code
          formatting, encoding, and conversion. Perfect your codes from HTML,
          CSS, JavaScript, JSON, Base64, and more. Seamlessly switch between
          diverse formats and elevate every coding session.
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>
      <div className="main-body">
        <nav>
          <button
            onClick={() => setSelectedFormatter("HTML")}
            className={selectedFormatter === "HTML" ? "selected-nav" : ""}
          >
            HTML
          </button>
          <button
            onClick={() => setSelectedFormatter("CSS")}
            className={selectedFormatter === "CSS" ? "selected-nav" : ""}
          >
            CSS
          </button>
          <button
            onClick={() => setSelectedFormatter("JS")}
            className={selectedFormatter === "JS" ? "selected-nav" : ""}
          >
            JavaScript
          </button>
          <button
            onClick={() => setSelectedFormatter("JSON")}
            className={selectedFormatter === "JSON" ? "selected-nav" : ""}
          >
            JSON
          </button>
          <button
            onClick={() => setSelectedFormatter("LESS")}
            className={selectedFormatter === "LESS" ? "selected-nav" : ""}
          >
            LESS
          </button>
          <button
            onClick={() => setSelectedFormatter("XML")}
            className={selectedFormatter === "XML" ? "selected-nav" : ""}
          >
            XML
          </button>
          <button
            onClick={() => setSelectedFormatter("GRAPHQL")}
            className={selectedFormatter === "GRAPHQL" ? "selected-nav" : ""}
          >
            GraphQL
          </button>
          <button
            onClick={() => setSelectedFormatter("TYPESCRIPT")}
            className={selectedFormatter === "TYPESCRIPT" ? "selected-nav" : ""}
          >
            TypeScript
          </button>{" "}
        </nav>

        <div id="formattersWindow">
          <ComponentToShow />
        </div>
      </div>
    </>
  );
}

export default HomePage;

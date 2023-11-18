import React, { useState } from "react";
import HTMLFormatter from "./HTMLFormatter";
import JSFormatter from "./JSFormatter";
import CSSFormatter from "./CSSFormatter";
import JSONFormatter from "./JSONFormatter";
import LESSFormatter from "./LESSFormatter";
import XMLFormatter from "./XMLFormatter";
import TypeScriptFormatter from "./TypeScriptFormatter";
import GraphQLFormatter from "./GraphQLFormatter";

function AllFormatters() {
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
  );
}

export default AllFormatters;

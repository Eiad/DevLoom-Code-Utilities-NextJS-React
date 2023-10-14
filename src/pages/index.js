import React, { useState } from "react";
import HTMLFormatter from "../components/formatters/HTMLFormatter";
import JSFormatter from "../components/formatters/JSFormatter";
import CSSFormatter from "../components/formatters/CSSFormatter";
import JSONFormatter from "../components/formatters/JSONFormatter";

function HomePage() {
  const [selectedFormatter, setSelectedFormatter] = useState("HTML"); // default formatter to display
  const currentYear = new Date().getFullYear();

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
    <div className="main-body">
      <nav className="text-center">
        <button
          onClick={() => setSelectedFormatter("HTML")}
          className={selectedFormatter === "HTML" ? "selected-nav" : ""}
        >
          HTML
        </button>
        <button
          onClick={() => setSelectedFormatter("JS")}
          className={selectedFormatter === "JS" ? "selected-nav" : ""}
        >
          JS
        </button>
        <button
          onClick={() => setSelectedFormatter("CSS")}
          className={selectedFormatter === "CSS" ? "selected-nav" : ""}
        >
          CSS
        </button>
        <button
          onClick={() => setSelectedFormatter("JSON")}
          className={selectedFormatter === "JSON" ? "selected-nav" : ""}
        >
          JSON
        </button>
        {/* Add more formatters as needed */}
      </nav>

      <div id="formattersWindow">
        <ComponentToShow />
      </div>
      <section className="footer text-center">
        <p className="copyrights text-center">&copy; Devloom {currentYear}</p>
      </section>
    </div>
  );
}

export default HomePage;

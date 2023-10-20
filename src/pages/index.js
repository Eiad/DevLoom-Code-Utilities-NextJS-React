import React, { useState } from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>
          DevLoom Formatter - Effortless Code Beautification and Formatting Tool
        </title>
        <meta
          name="description"
          content="Elevate your coding experience with DevLoom Formatter. Simplify code formatting and beautification for HTML, JavaScript, CSS, and JSON effortlessly. Streamline your development workflow with our powerful code beautifier tool."
        />
      </Head>
      <div className="top-section">
        <h1>Meet DevLoom: Every Developer&#39;s Good Friend</h1>
        <p>
          Dive into DevLoom, your hub for multi-language code formatting and
          conversion. Perfect codes from HTML, CSS, JavaScript, JSON, and more,
          or easily switch between diverse formats. With DevLoom, elevate every
          coding session.
        </p>
        <p className="get-started">No ads - No Bullshit ;)</p>
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
      </div>
    </>
  );
}

export default HomePage;

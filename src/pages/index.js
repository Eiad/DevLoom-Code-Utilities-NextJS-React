import React, { useState } from "react";
import Head from "next/head";
import HTMLFormatter from "../components/formatters/HTMLFormatter";
import JSFormatter from "../components/formatters/JSFormatter";
import CSSFormatter from "../components/formatters/CSSFormatter";
import JSONFormatter from "../components/formatters/JSONFormatter";
import LESSFormatter from "../components/formatters/LESSFormatter";
import XMLFormatter from "../components/formatters/XMLFormatter";

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

    default:
      ComponentToShow = HTMLFormatter;
  }

  return (
    <>
      <Head>
        <title>
          DevLoom - The All-in-One Code Formatter, Converter and Previewer - No
          Ads - No Trackers - No Bullshit!
        </title>
        <meta
          name="description"
          content="Elevate your coding experience with DevLoom Formatter. Simplify code formatting and beautification for HTML, JavaScript, CSS, and JSON effortlessly. Streamline your development workflow with our powerful code beautifier tool."
        />
      </Head>
      <div className="top-section">
        <h1>
          Meet DevLoom: Every Developer&#39;s Good Friend - Online and Free
        </h1>
        <p>
          Dive into DevLoom, your hub for multi-language code formatting and
          conversion. Perfect codes from HTML, CSS, JavaScript, JSON, and more,
          or easily switch between diverse formats. With DevLoom, elevate every
          coding session.
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
            JS
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
        </nav>

        <div id="formattersWindow">
          <ComponentToShow />
        </div>
      </div>
    </>
  );
}

export default HomePage;

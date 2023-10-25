import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "../app/globals.css";
import "../app/responsive.css";
import Head from "next/head";
import MainMenu from "../components/MainMenu";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  // State to manage the open/close status of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  // Set the menu's initial state based on the viewport width
  useEffect(() => {
    // By default mobile menu is hidden on mobile
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
    // When a menu item is selected, the whole navigation menu closes on mobile.
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768);
      };
      // Set initial value
      handleResize();
      window.addEventListener("resize", handleResize);
      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          DevLoom - The All-in-One Code Formatter, Converter, Encoder, and
          Previewer - No Ads - No Trackers - No Bullshit!
        </title>
        <meta
          name="description"
          content="Elevate your coding experience with DevLoom. Simplify code formatting, encoding, and beautification for HTML, JavaScript, CSS, JSON, and Base64 effortlessly. Streamline your development workflow with our comprehensive suite of tools."
        />
        <meta
          name="keywords"
          content="DevLoom, Code Formatter, HTML Formatter, LESS Formatter, Code Beautifier, Coding Assistant, Development Workflow, Code Optimization, JSON to YAML Converter, YAML to JSON Converter, HTML Previewer, Markdown Previewer, Base64 Encoder, Code Conversion Tool, Simplify Coding, Improve Coding Experience, Dynamic Code Previews, Live Markdown Previews, Coding Tools, Efficient Coding Tools, Streamline Coding Process, Code Beautification, lorem ipsum generator, Base64 Encoding"
        />
      </Head>
      {/*  Main body content */}
      <div
        className={`main-container ${
          isMenuOpen ? "lefthand-open" : "lefthand-closed"
        }`}
      >
        <section
          className={`left-hand-column ${isMenuOpen ? "open" : "closed"}`}
        >
          <div className="menu-burger">
            <Image
              src="/icons/list-square-bullet-icon.svg"
              width={25}
              height={25}
              alt="Devloom Formatters"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <div className="menu-content">
            <MainMenu
              isMobileView={isMobileView}
              closeMenu={() => setIsMenuOpen(false)}
            />
          </div>
        </section>
        <section
          className={`right-hand-column ${
            isMenuOpen ? "menu-open" : "menu-closed"
          }`}
        >
          <Component {...pageProps} />
        </section>
      </div>
      <Analytics />
    </>
  );
}

export default MyApp;

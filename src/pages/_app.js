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
        <title>
          DevLoom Formatter - Effortless Code Beautification and Formatting Tool
        </title>
        <meta
          name="description"
          content="Elevate your coding experience with DevLoom Formatter. Simplify code formatting and beautification for HTML, JavaScript, CSS, and JSON effortlessly. Streamline your development workflow with our powerful code beautifier tool."
        />
        <meta
          name="keywords"
          content="DevLoom Formatter, code beautifier, code formatter, HTML formatter, JavaScript formatter, CSS formatter, JSON formatter, code formatting tool, development workflow, coding experience, code optimization"
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
          <div className="top-section">
            <h1>Welcome to DEVLOOM</h1>
            <p>
              Dive into DevLoom, your hub for multi-language code formatting and
              conversion. Perfect codes from HTML, CSS, JavaScript, JSON, and
              more, or easily switch between diverse formats. With DevLoom,
              elevate every coding session.
            </p>
            <p className="get-started">No ads - No Bullshit ;)</p>
          </div>
          <Component {...pageProps} />
        </section>
      </div>
      <Analytics />
    </>
  );
}

export default MyApp;

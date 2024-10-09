import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "../app/css/reset.css";
import "../app/css/globals.css";
import "../app/css/global-colors-app.css";

import "../app/css/responsive.css";
import Head from "next/head";
import MainMenu from "../components/MainMenu-full-access";
import MainMenuDemo from "../components/MainMenu-demo-access";
import useCheckLicenseValidity from "../components/useCheckLicenseValidity";
import Image from "next/image";
import Link from "next/link";
import useSwipeToOpenMenu from "../components/useSwipeToOpenMenu";

function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [licenseActivated, setLicenseActivated] = useState(false);

  useCheckLicenseValidity(setLicenseActivated);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useSwipeToOpenMenu(setIsMenuOpen);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DevLoom - The All-in-One Dev Utilities App - Formatter, Converter, Encoder, and
          Previewer - No Ads - No Trackers - No Bullshit!</title>
        <meta
          name="description"
          content="Streamline your development workflow with DevLoom's comprehensive suite of dev utilities. Effortlessly format, convert, encode, preview and debug code for HTML, CSS, JavaScript, JSON, YAML, and more."
        />
        <meta
          name="keywords"
          content="DevLoom, Code Formatter, HTML Formatter, LESS Formatter, Code Beautifier, Coding Assistant, Development Workflow, Code Optimization, JSON to YAML Converter, YAML to JSON Converter, HTML Previewer, Markdown Previewer, Base64 Encoder, Code Conversion Tool, Simplify Coding, Improve Coding Experience, Dynamic Code Previews, Live Markdown Previews, Coding Tools, Efficient Coding Tools, Streamline Coding Process, Code Beautification, lorem ipsum generator, Base64 Encoding"
        />
      </Head>
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
          <section className="full-width-logo">
            <Link alt="DevLoom Home page" href="/">
              <Image
                src="/logo/devloom-logo.png"
                width={132}
                height={86}
                alt="Devloom logo"
              />
            </Link>
          </section>
          <Component {...pageProps} />
        </section>
      </div>
      <div
        className={`dark-overlay ${isMenuOpen ? "menu-opened" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div id="modal-root"></div>
      <Analytics />
    </>
  );
}

export default MyApp;

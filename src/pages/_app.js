import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
import { isTauri } from "../utils/tauri";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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

  // Listen for Tauri menu navigation events
  useEffect(() => {
    if (!isTauri()) return;

    let unlisten;
    const setupListeners = async () => {
      const { listen } = await import("@tauri-apps/api/event");

      // Navigate to route from menu
      unlisten = await listen("navigate", (event) => {
        router.push(event.payload);
      });
    };

    setupListeners();

    return () => {
      if (unlisten) unlisten();
    };
  }, [router]);

  // Disable right-click context menu in Tauri
  useEffect(() => {
    if (!isTauri()) return;

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // Update window title based on current route
  useEffect(() => {
    if (!isTauri()) return;

    const updateTitle = async () => {
      const { getCurrentWindow } = await import("@tauri-apps/api/window");
      const window = getCurrentWindow();

      const routeTitles = {
        "/": "DevLoom",
        "/formatters/HTMLFormatter": "DevLoom - HTML Formatter",
        "/formatters/CSSFormatter": "DevLoom - CSS Formatter",
        "/formatters/JSFormatter": "DevLoom - JavaScript Formatter",
        "/formatters/JSONFormatter": "DevLoom - JSON Formatter",
        "/formatters/XMLFormatter": "DevLoom - XML Formatter",
        "/formatters/LESSFormatter": "DevLoom - LESS Formatter",
        "/formatters/TypeScriptFormatter": "DevLoom - TypeScript Formatter",
        "/formatters/GraphQLFormatter": "DevLoom - GraphQL Formatter",
        "/converters/HTMLJSXConverter": "DevLoom - HTML to JSX",
        "/converters/JSONYAMLConverter": "DevLoom - JSON to YAML",
        "/converters/YAMLJSONConverter": "DevLoom - YAML to JSON",
        "/converters/Base64Encoder": "DevLoom - Base64 Encoder",
        "/converters/Base64ImageEncoder": "DevLoom - Base64 Image Encoder",
        "/converters/NumerBaseConverter": "DevLoom - Number Base Converter",
        "/converters/StringCaseConverter": "DevLoom - String Case Converter",
        "/converters/HTMLEntityEncoder": "DevLoom - HTML Entity Encoder",
        "/previewers/HTMLPreviewer": "DevLoom - HTML Previewer",
        "/previewers/MARKDOWNPreviewer": "DevLoom - Markdown Previewer",
        "/debuggers/RegExpTester": "DevLoom - RegExp Tester",
        "/tools/LoremIpsum": "DevLoom - Lorem Ipsum Generator",
        "/about-devloom": "DevLoom - About",
        "/LicenseActivation": "DevLoom - License Activation",
      };

      const title = routeTitles[router.pathname] || "DevLoom";
      await window.setTitle(title);
    };

    updateTitle();
  }, [router.pathname]);

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
        <meta name="google-adsense-account" content="ca-pub-9765751367804035" />
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

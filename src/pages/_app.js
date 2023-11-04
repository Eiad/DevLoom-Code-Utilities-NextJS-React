import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "../app/css/reset.css";
import "../app/css/globals.css";
import "../app/css/responsive.css";
import Head from "next/head";
import MainMenu from "../components/MainMenu-web";
//import MainMenu from "../components/MainMenu-app";
import Image from "next/image";
import Link from "next/link";
// TEMO COMMENTING
// import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  // State to manage the open/close status of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  // TEMO COMMENTING
  // const router = useRouter();

  // DEMO COMMENTING - List of routes that can be accessed without license activation
  // const freeRoutes = ["/HTMLFormatter"];
  // useEffect(() => {
  //   // Function to check license activation
  //   const checkLicenseActivation = () => {
  //     // If the current route is in the freeRoutes array, return early (do not check for activation)
  //     if (freeRoutes.includes(router.pathname)) {
  //       return;
  //     }

  //     const activationStatus = localStorage.getItem("Devloom");
  //     if (activationStatus !== "Activated") {
  //       router.push("/LicenseActivation");
  //     }
  //   };

  //   checkLicenseActivation();
  // }, [router.pathname]);

  // Set the menu's initial state based on the viewport width for mobile menu handling
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
      {/* Main body content */}
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
                src="/logo/devloom-logo.jpg"
                width={132}
                height={80}
                alt="Devloom logo"
              />
            </Link>
          </section>
          <Component {...pageProps} />
        </section>
      </div>
      <Analytics />
    </>
  );
}

export default MyApp;

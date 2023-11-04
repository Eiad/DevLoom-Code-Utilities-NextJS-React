import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MainMenu({ isMobileView, closeMenu }) {
  const router = useRouter();
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const activationStatus = localStorage.getItem("Devloom");
      setIsActivated(activationStatus === "Activated");
    }
  }, []);

  const navigateAndRefresh = (url) => {
    // If mobile view, close the menu first.
    if (isMobileView && closeMenu) {
      closeMenu();
    }
    // Next.js router push followed by window location reload.
    router.push(url).then(() => window.location.reload());
  };

  const getLinkClass = (path) => {
    return router.pathname === path ? "current-page" : "";
  };

  return (
    <section className="menu-logo">
      <div className="header-logo">
        <div className="logo-img">
          <Link href="/" onClick={isMobileView ? closeMenu : null}>
            <Image
              src="/logo/devloom-logo-white-side-2.png"
              width={500}
              height={200}
              alt="Devloom logo"
            />
          </Link>
        </div>
      </div>
      <div
        className={`main-menu ${isActivated ? "full-access" : "demo-access"}`}
      >
        <ul>
          <li className={getLinkClass("/")}>
            <div>
              <span
                className="menu-a"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/");
                }}
              >
                <Image
                  src="/icons/format-icon.svg"
                  width={20}
                  height={20}
                  alt="Devloom Formatters"
                />
                <span>ALL Formatters</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/HTMLFormatter")}>
            <div>
              <span
                className="menu-a"
                href="/HTMLFormatter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/HTMLFormatter");
                }}
              >
                <Image
                  src="/icons/html-icon.svg"
                  width={20}
                  height={20}
                  alt="HTML Formatter"
                />
                <span>HTML Formatter</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/CSSFormatter")}>
            <div>
              <span
                className="menu-a"
                href="/CSSFormatter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/CSSFormatter");
                }}
              >
                <Image
                  src="/icons/css-icon.svg"
                  width={20}
                  height={20}
                  alt="CSS Formatter"
                />
                <span>CSS Formatter</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/JSFormatter")}>
            <div>
              <span
                className="menu-a"
                href="/JSFormatter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/JSFormatter");
                }}
              >
                <Image
                  src="/icons/js-icon.svg"
                  width={20}
                  height={20}
                  alt="JavaScript Formatter"
                />
                <span>JavaScript Formatter</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/JSONFormatter")}>
            <div>
              <span
                className="menu-a"
                href="/JSONFormatter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/JSONFormatter");
                }}
              >
                <Image
                  src="/icons/json-file-icon.svg"
                  width={20}
                  height={20}
                  alt="JSON Formatter"
                />
                <span>JSON Formatter</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/LESSFormatter")}>
            <div>
              <span
                className="menu-a"
                href="/LESSFormatter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/LESSFormatter");
                }}
              >
                <Image
                  src="/icons/less-icon.svg"
                  width={20}
                  height={20}
                  alt="LESS Formatter"
                />
                <span>LESS Formatter</span>
              </span>
            </div>
          </li>

          <li className={getLinkClass("/XMLFormatter")}>
            <div>
              <span
                className="menu-a"
                href="/XMLFormatter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/XMLFormatter");
                }}
              >
                <Image
                  src="/icons/xml-file-icon.svg"
                  width={20}
                  height={20}
                  alt="XML Formatter"
                />
                <span>XML Formatter</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/TypeScriptFormatter")}>
            <div>
              <span
                className="menu-a"
                href="/TypeScriptFormatter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/TypeScriptFormatter");
                }}
              >
                <Image
                  src="/icons/typescript-icon.svg"
                  width={20}
                  height={20}
                  alt="TypeScript Formatter"
                />
                <span>TypeScript Formatter</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/GraphQLFormatter")}>
            <div>
              <span
                className="menu-a"
                href="/GraphQLFormatter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/GraphQLFormatter");
                }}
              >
                <Image
                  src="/icons/file-gql.svg"
                  width={20}
                  height={20}
                  alt="GraphQL Formatter"
                />
                <span>GraphQL Formatter</span>
              </span>
            </div>
          </li>
          <li className="menu-converters">
            <p>Converters</p>
          </li>
          <li className={getLinkClass("/HTMLJSXConverter")}>
            <div>
              <span
                className="menu-a"
                href="/HTMLJSXConverter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/HTMLJSXConverter");
                }}
              >
                <Image
                  src="/icons/convert-icon.svg"
                  width={20}
                  height={20}
                  alt="HTML to JSX"
                />
                <span>HTML to JSX</span>
              </span>
            </div>
          </li>

          <li className={getLinkClass("/JSONYAMLConverter")}>
            <div>
              <span
                className="menu-a"
                href="/JSONYAMLConverter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/JSONYAMLConverter");
                }}
              >
                <Image
                  src="/icons/convert-icon.svg"
                  width={20}
                  height={20}
                  alt="JSON to YAML"
                />
                <span>JSON to YAML</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/YAMLJSONConverter")}>
            <div>
              <span
                className="menu-a"
                href="/YAMLJSONConverter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/YAMLJSONConverter");
                }}
              >
                <Image
                  src="/icons/convert-icon.svg"
                  width={20}
                  height={20}
                  alt="YAML to JSON"
                />
                <span>YAML to JSON</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/Base64Encoder")}>
            <div>
              <span
                className="menu-a"
                href="/Base64Encoder"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/Base64Encoder");
                }}
              >
                <Image
                  src="/icons/base64-icon.svg"
                  width={20}
                  height={20}
                  alt="Base64 Encoder"
                />
                <span>Base64 Encoder</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/NumerBaseConverter")}>
            <div>
              <span
                className="menu-a"
                href="/NumerBaseConverter"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/NumerBaseConverter");
                }}
              >
                <Image
                  src="/icons/binary-icon.svg"
                  width={20}
                  height={20}
                  alt="Numer Base Converter"
                />
                <span>Numer Base Converter</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/HTMLEntityEncoder")}>
            <div>
              <span
                className="menu-a"
                href="/HTMLEntityEncoder"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/HTMLEntityEncoder");
                }}
              >
                <Image
                  src="/icons/html-entity-icon.svg"
                  width={20}
                  height={20}
                  alt="HTML Entity Encoder"
                />
                <span>HTML Entity Encoder</span>
              </span>
            </div>
          </li>
          <li className="menu-converters">
            <p>Previewers</p>
          </li>

          <li className={getLinkClass("/HTMLPreviewer")}>
            <div>
              <span
                className="menu-a"
                href="/HTMLPreviewer"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/HTMLPreviewer");
                }}
              >
                <Image
                  src="/icons/html-fill.svg"
                  width={20}
                  height={20}
                  alt="HTML Previewer"
                />
                <span>HTML Previewer</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/MARKDOWNPreviewer")}>
            <div>
              <span
                className="menu-a"
                href="/MARKDOWNPreviewer"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/MARKDOWNPreviewer");
                }}
              >
                <Image
                  src="/icons/markdown-fill.svg"
                  width={20}
                  height={20}
                  alt="Markdown Previewer"
                />
                <span>Markdown Previewer</span>
              </span>
            </div>
          </li>
          <li className="menu-converters">
            <p>Helpful Tools</p>
          </li>
          <li className={getLinkClass("/LoremIpsum")}>
            <div>
              <span
                className="menu-a"
                href="/LoremIpsum"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/LoremIpsum");
                }}
              >
                <Image
                  src="/icons/lorem-icon.svg"
                  width={20}
                  height={20}
                  alt="Lorem Ipsum Generator"
                />
                <span>Lorem Ipsum Generator</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/JWTDebugger")}>
            <div>
              <span
                className="menu-a"
                href="/JWTDebugger"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/JWTDebugger");
                }}
              >
                <Image
                  src="/icons/jwt-icon.svg"
                  width={20}
                  height={20}
                  alt="JWT Debugger"
                />
                <span>JWT Debugger</span>
              </span>
            </div>
          </li>
          <li className={getLinkClass("/RegExpTester")}>
            <div>
              <span
                className="menu-a"
                href="/RegExpTester"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndRefresh("/RegExpTester");
                }}
              >
                <Image
                  src="/icons/regex-icon.svg"
                  width={20}
                  height={20}
                  alt="RegExp Tester"
                />
                <span>RegExp Tester</span>
              </span>
            </div>
          </li>

          <li className={getLinkClass("/LicenseActivation")}>
            <div>
              <span
                className="menu-a"
                href="/LicenseActivation"
                onClick={(e) => {
                  e.preventDefault();
                  isMobileView && closeMenu();
                  navigateAndRefresh("/LicenseActivation");
                }}
              >
                <Image
                  src="/icons/license-icon.svg"
                  width={20}
                  height={20}
                  alt="License Details"
                />
                {isActivated ? (
                  <span>My License Details</span>
                ) : (
                  <span>License Activation</span>
                )}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <div className="logo-img">
          <Image
            src="/logo/devloom-logo-full-square.png"
            width={500}
            height={500}
            alt="Devloom logo"
          />
        </div>
      </div>
    </section>
  );
}

export default MainMenu;

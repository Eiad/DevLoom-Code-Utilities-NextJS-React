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
              <Link href="/" onClick={isMobileView ? closeMenu : null}>
                <Image
                  src="/icons/format-icon.svg"
                  width={20}
                  height={20}
                  alt="Devloom Formatters"
                />
                <span>ALL Formatters</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/HTMLFormatter")}>
            <div>
              <Link
                href="/HTMLFormatter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/html-icon.svg"
                  width={20}
                  height={20}
                  alt="HTML Formatter"
                />
                <span>HTML Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/CSSFormatter")}>
            <div>
              <Link
                href="/CSSFormatter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/css-icon.svg"
                  width={20}
                  height={20}
                  alt="CSS Formatter"
                />
                <span>CSS Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/JSFormatter")}>
            <div>
              <Link
                href="/JSFormatter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/js-icon.svg"
                  width={20}
                  height={20}
                  alt="JavaScript Formatter"
                />
                <span>JavaScript Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/JSONFormatter")}>
            <div>
              <Link
                href="/JSONFormatter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/json-file-icon.svg"
                  width={20}
                  height={20}
                  alt="JSON Formatter"
                />
                <span>JSON Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/LESSFormatter")}>
            <div>
              <Link
                href="/LESSFormatter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/less-icon.svg"
                  width={20}
                  height={20}
                  alt="LESS Formatter"
                />
                <span>LESS Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/XMLFormatter")}>
            <div>
              <Link
                href="/XMLFormatter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/xml-file-icon.svg"
                  width={20}
                  height={20}
                  alt="XML Formatter"
                />
                <span>XML Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/TypeScriptFormatter")}>
            <div>
              <Link
                href="/TypeScriptFormatter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/typescript-icon.svg"
                  width={20}
                  height={20}
                  alt="TypeScript Formatter"
                />
                <span>TypeScript Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/GraphQLFormatter")}>
            <div>
              <Link
                href="/GraphQLFormatter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/file-gql.svg"
                  width={20}
                  height={20}
                  alt="GraphQL Formatter"
                />
                <span>GraphQL Formatter</span>
              </Link>
            </div>
          </li>
          <li className="menu-converters">
            <p>Converters</p>
          </li>
          <li className={getLinkClass("/HTMLJSXConverter")}>
            <div>
              <Link
                href="/HTMLJSXConverter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/convert-icon.svg"
                  width={20}
                  height={20}
                  alt="HTML to JSX"
                />
                <span>HTML to JSX</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/JSONYAMLConverter")}>
            <div>
              <Link
                href="/JSONYAMLConverter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/convert-icon.svg"
                  width={20}
                  height={20}
                  alt="JSON to YAML"
                />
                <span>JSON to YAML</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/YAMLJSONConverter")}>
            <div>
              <Link
                href="/YAMLJSONConverter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/convert-icon.svg"
                  width={20}
                  height={20}
                  alt="YAML to JSON"
                />
                <span>YAML to JSON</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/Base64Encoder")}>
            <div>
              <Link
                href="/Base64Encoder"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/base64-icon.svg"
                  width={20}
                  height={20}
                  alt="Base64 Encoder"
                />
                <span>Base64 Encoder</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/NumerBaseConverter")}>
            <div>
              <Link
                href="/NumerBaseConverter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/binary-icon.svg"
                  width={20}
                  height={20}
                  alt="Numer Base Converter"
                />
                <span>Numer Base Converter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/StringCaseConverter")}>
            <div>
              <Link
                href="/StringCaseConverter"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/convert-icon.svg"
                  width={20}
                  height={20}
                  alt="YAML to JSON"
                />
                <span>String Case Converter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/HTMLEntityEncoder")}>
            <div>
              <Link
                href="/HTMLEntityEncoder"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/html-entity-icon.svg"
                  width={20}
                  height={20}
                  alt="HTML Entity Encoder"
                />
                <span>HTML Entity Encoder</span>
              </Link>
            </div>
          </li>
          <li className="menu-converters">
            <p>Previewers</p>
          </li>
          <li className={getLinkClass("/HTMLPreviewer")}>
            <div>
              <Link
                href="/HTMLPreviewer"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/html-fill.svg"
                  width={20}
                  height={20}
                  alt="HTML Previewer"
                />
                <span>HTML Previewer</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/MARKDOWNPreviewer")}>
            <div>
              <Link
                href="/MARKDOWNPreviewer"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/markdown-fill.svg"
                  width={20}
                  height={20}
                  alt="Markdown Previewer"
                />
                <span>Markdown Previewer</span>
              </Link>
            </div>
          </li>
          <li className="menu-converters">
            <p>Helpful Tools</p>
          </li>
          <li className={getLinkClass("/LoremIpsum")}>
            <div>
              <Link
                href="/LoremIpsum"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/lorem-icon.svg"
                  width={20}
                  height={20}
                  alt="Lorem Ipsum Generator"
                />
                <span>Lorem Ipsum Generator</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/JWTDebugger")}>
            <div>
              <Link
                href="/JWTDebugger"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/jwt-icon.svg"
                  width={20}
                  height={20}
                  alt="JWT Debugger"
                />
                <span>JWT Debugger</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/RegExpTester")}>
            <div>
              <Link
                href="/RegExpTester"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/regex-icon.svg"
                  width={20}
                  height={20}
                  alt="RegExp Tester"
                />
                <span>RegExpTester</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/LicenseActivation")}>
            <div>
              <Link
                href="/LicenseActivation"
                onClick={isMobileView ? closeMenu : null}
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
              </Link>
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

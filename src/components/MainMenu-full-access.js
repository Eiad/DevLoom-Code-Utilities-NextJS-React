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
          <li className={getLinkClass("/formatters/HTMLFormatter")}>
            <div>
              <Link
                href="/formatters/HTMLFormatter"
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
          <li className={getLinkClass("/formatters/CSSFormatter")}>
            <div>
              <Link
                href="/formatters/CSSFormatter"
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
          <li className={getLinkClass("/formatters/JSFormatter")}>
            <div>
              <Link
                href="/formatters/JSFormatter"
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
          <li className={getLinkClass("/formatters/JSONFormatter")}>
            <div>
              <Link
                href="/formatters/JSONFormatter"
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
          <li className={getLinkClass("/formatters/LESSFormatter")}>
            <div>
              <Link
                href="/formatters/LESSFormatter"
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
          <li className={getLinkClass("/formatters/XMLFormatter")}>
            <div>
              <Link
                href="/formatters/XMLFormatter"
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
          <li className={getLinkClass("/formatters/TypeScriptFormatter")}>
            <div>
              <Link
                href="/formatters/TypeScriptFormatter"
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
          <li className={getLinkClass("/formatters/GraphQLFormatter")}>
            <div>
              <Link
                href="/formatters/GraphQLFormatter"
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
          <li className={getLinkClass("/converters/HTMLJSXConverter")}>
            <div>
              <Link
                href="/converters/HTMLJSXConverter"
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
          <li className={getLinkClass("/converters/JSONYAMLConverter")}>
            <div>
              <Link
                href="/converters/JSONYAMLConverter"
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
          <li className={getLinkClass("/converters/YAMLJSONConverter")}>
            <div>
              <Link
                href="/converters/YAMLJSONConverter"
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
          <li className={getLinkClass("/converters/Base64Encoder")}>
            <div>
              <Link
                href="/converters/Base64Encoder"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/base64-icon.svg"
                  width={20}
                  height={20}
                  alt="Base64 Encoder"
                />
                <span>Base64 Encode/Decode</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/converters/Base64ImageEncoder")}>
            <div>
              <Link
                href="/converters/Base64ImageEncoder"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/picture-filled-icon.svg"
                  width={20}
                  height={20}
                  alt="Base64 Encoder"
                />
                <span>Base64 Image Encode/Decode</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/converters/NumerBaseConverter")}>
            <div>
              <Link
                href="/converters/NumerBaseConverter"
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
          <li className={getLinkClass("/converters/StringCaseConverter")}>
            <div>
              <Link
                href="/converters/StringCaseConverter"
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
          <li className={getLinkClass("/converters/HTMLEntityEncoder")}>
            <div>
              <Link
                href="/converters/HTMLEntityEncoder"
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
          <li className={getLinkClass("/previewers/HTMLPreviewer")}>
            <div>
              <Link
                href="/previewers/HTMLPreviewer"
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
          <li className={getLinkClass("/previewers/MARKDOWNPreviewer")}>
            <div>
              <Link
                href="/previewers/MARKDOWNPreviewer"
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
          <li className={getLinkClass("/tools/LoremIpsum")}>
            <div>
              <Link
                href="/tools/LoremIpsum"
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
          <li className={getLinkClass("/debuggers/JWTDebugger")}>
            <div>
              <Link
                href="/debuggers/JWTDebugger"
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
          <li className={getLinkClass("/debuggers/RegExpTester")}>
            <div>
              <Link
                href="/debuggers/RegExpTester"
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
          <li className={getLinkClass("/about-devloom")}>
            <div>
              <Link
                className="about-us-link"
                href="/about-devloom"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/about-devloom.svg"
                  width={20}
                  height={20}
                  alt="About Devloom - Contact us"
                />
                <span>About and Contacts</span>
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

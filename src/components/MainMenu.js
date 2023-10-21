import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function MainMenu({ isMobileView, closeMenu, isFWView }) {
  const router = useRouter();

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
      <div className="main-menu">
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
                  alt="Format Icon"
                />
                <span>JavaScript Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/JSONFormatter")}>
            <div>
              <Link href="/JSONFormatter">
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
                  alt="Format Icon"
                />
                <span>XML Formatter</span>
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
                  alt="Format Icon"
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
                  alt="Format Icon"
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
                  alt="Format Icon"
                />
                <span>YAML to JSON</span>
              </Link>
            </div>
          </li>
          <li className="menu-converters">
            <p>Previewers</p>
          </li>
          <li className={getLinkClass("/HTMLPreviewer")}>
            <div>
              <Link href="/HTMLPreviewer" onClick={closeMenu}>
                <Image
                  src="/icons/html-fill.svg"
                  width={20}
                  height={20}
                  alt="Format Icon"
                />
                <span>HTML Previewer</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/MARKDOWNPreviewer")}>
            <div>
              <Link href="/MARKDOWNPreviewer" onClick={closeMenu}>
                <Image
                  src="/icons/markdown-fill.svg"
                  width={20}
                  height={20}
                  alt="Format Icon"
                />
                <span>Markdown Previewer</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MainMenu;

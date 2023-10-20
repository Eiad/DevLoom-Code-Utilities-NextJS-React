import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function MainMenu({ isMobileView, closeMenu }) {
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
          <li className={getLinkClass("/HTMLFormatterPage")}>
            <div>
              <Link
                href="/HTMLFormatterPage"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/html5-line-icon.svg"
                  width={20}
                  height={20}
                  alt="HTML Formatter"
                />
                <span>HTML Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/CSSFormatterPage")}>
            <div>
              <Link
                href="/CSSFormatterPage"
                onClick={isMobileView ? closeMenu : null}
              >
                <Image
                  src="/icons/css3-icon.svg"
                  width={20}
                  height={20}
                  alt="CSS Formatter"
                />
                <span>CSS Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/JSFormatterPage")}>
            <div>
              <Link
                href="/JSFormatterPage"
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
          <li className={getLinkClass("/JSONFormatterPage")}>
            <div>
              <Link href="/JSONFormatterPage">
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
          <li className={getLinkClass("/LESSFormatterPage")}>
            <div>
              <Link
                href="/LESSFormatterPage"
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
          <li className={getLinkClass("/XMLFormatterPage")}>
            <div>
              <Link
                href="/XMLFormatterPage"
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
          {/* <li className="menu-converters">
            <p>Converters</p>
          </li> */}
          <li className={getLinkClass("/HTMLJSXConverterPage")}>
            <div>
              <Link
                href="/HTMLJSXConverterPage"
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
          <li className={getLinkClass("/JSONYAMLConverterPage")}>
            <div>
              <Link
                href="/JSONYAMLConverterPage"
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
          <li className={getLinkClass("/YAMLJSONConverterPage")}>
            <div>
              <Link
                href="/YAMLJSONConverterPage"
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
        </ul>
      </div>
    </section>
  );
}

export default MainMenu;

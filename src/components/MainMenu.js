import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function MainMenu() {
  const router = useRouter();

  const getLinkClass = (path) => {
    return router.pathname === path ? "current-page" : "";
  };

  return (
    <section className="menu-logo">
      <div className="header-logo">
        <a href="#">
          <Image
            src="/devloom-logo-white-side-2.png"
            width={500}
            height={200}
            alt="Devloom logo"
          />
        </a>
      </div>
      <div className="main-menu">
        <ul>
          <li className={getLinkClass("/")}>
            <Link href="/">ALL Formatters</Link>
          </li>
          <li className={getLinkClass("/HTMLFormatterPage")}>
            <Link href="/HTMLFormatterPage">HTML Formatter</Link>
          </li>
          <li className={getLinkClass("/CSSFormatterPage")}>
            <Link href="/CSSFormatterPage">CSS Formatter</Link>
          </li>
          <li className={getLinkClass("/JSFormatterPage")}>
            <Link href="/JSFormatterPage">JavaScript Formatter</Link>
          </li>
          <li className={getLinkClass("/JSONFormatterPage")}>
            <Link href="/JSONFormatterPage">JSON Formatter</Link>
          </li>
          <li className="menu-converters">
            <p>Converters</p>
          </li>
          <li className={getLinkClass("/HTMLJSXConverterPage")}>
            <Link href="/HTMLJSXConverterPage">HTML to JSX Converter</Link>
          </li>
          <li className={getLinkClass("/JSONYAMLConverterPage")}>
            <Link href="/JSONYAMLConverterPage">JSON to YAML Converter</Link>
          </li>
          <li className={getLinkClass("/YAMLJSONConverterPage")}>
            <Link href="/YAMLJSONConverterPage">YAML to JSON Converter</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MainMenu;

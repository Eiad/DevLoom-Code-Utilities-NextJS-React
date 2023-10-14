import Link from "next/link";

function MainMenu() {
  return (
    <div className="main-menu">
      <h3>Navigation Menu</h3>
      <ul>
        <li>
          <Link href="/CSSFormatterPage">CSS Formatter</Link>
        </li>
        <li>
          <Link href="/HTMLFormatterPage">HTML Formatter</Link>
        </li>
        <li>
          <Link href="/HTMLJSXConverterPage">HTML to JSX Converter</Link>
        </li>
        <li>
          <Link href="/JSFormatterPage">JavaScript Formatter</Link>
        </li>
        <li>
          <Link href="/JSONFormatterPage">JSON Formatter</Link>
        </li>
        <li>
          <Link href="/JSONYAMLConverterPage">JSON to YAML Converter</Link>
        </li>
        <li>
          <Link href="/YAMLJSONConverterPage">YAML to JSON Converter</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainMenu;

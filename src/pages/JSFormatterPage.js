import JSFormatter from "../components/formatters/JSFormatter";
import Head from "next/head";

function JSFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom javaScript Formatter - Effortless Code Beautification and
          Formatting HTML Tool
        </title>
        <meta
          name="description"
          content="Elevate your coding experience with DevLoom Formatter. Simplify code formatting and beautification for HTML, JavaScript, CSS, and JSON effortlessly. Streamline your development workflow with our powerful code beautifier tool."
        />
        <meta
          name="description"
          content="Elevate your coding experience with DevLoom Formatter. Simplify code formatting and beautification for HTML, JavaScript, CSS, and JSON effortlessly. Streamline your development workflow with our powerful code beautifier tool."
        />
      </Head>
      <div className="top-section">
        <h1>Meet DevLoom: Every Developer&#39;s Good Friend</h1>
        <p>
          Dive into DevLoom, your hub for multi-language code formatting and
          conversion. Perfect codes from HTML, CSS, JavaScript, JSON, and more,
          or easily switch between diverse formats. With DevLoom, elevate every
          coding session.
        </p>
        <p className="get-started">No ads - No Bullshit ;)</p>
      </div>
      <JSFormatter />
    </>
  );
}

export default JSFormatterPage;

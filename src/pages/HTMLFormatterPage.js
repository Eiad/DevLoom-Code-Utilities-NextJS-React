import HTMLFormatter from "../components/formatters/HTMLFormatter";
import Head from "next/head";

function HTMLFormatterPage() {
  return (
    <>
      <Head>
        <title>DevLoom HTML Formatter - Simplify Your HTML Coding</title>
        <meta
          name="description"
          content="Make your HTML coding seamless with DevLoom HTML Formatter. Effortless code beautification and formatting tailored for HTML. - Meta Keywords: HTML formatter, code beautifier, code formatter, DevLoom"
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
      <HTMLFormatter />
    </>
  );
}

export default HTMLFormatterPage;

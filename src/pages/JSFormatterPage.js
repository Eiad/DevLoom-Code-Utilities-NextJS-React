import JSFormatter from "../components/formatters/JSFormatter";
import Head from "next/head";

function JSFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom JavaScript Formatter - Optimize Your JavaScript Coding
        </title>
        <meta
          name="description"
          content="Improve your JavaScript coding with DevLoom JavaScript Formatter. Effortless code beautification and formatting designed for JavaScript."
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

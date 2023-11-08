import HTMLJSXConverter from "../../components/converters/HTMLJSXConverter";

import Head from "next/head";

function htmljsxConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom Online Free HTML to JSX Converter - Simplify Your Code
          Conversion
        </title>
        <meta
          name="description"
          content="Make code conversion easy with DevLoom HTML to JSX Converter. Streamline your development workflow with our powerful conversion tool."
        />
      </Head>
      <div className="top-section">
        <h1>DevLoom HTML to JSX Converter - Simplify Your Code Conversion</h1>
        <p>
          Dive into DevLoom, your hub for multi-language code formatting and
          conversion. Perfect codes from HTML, CSS, JavaScript, JSON, and more,
          or easily switch between diverse formats. With DevLoom, elevate every
          coding session.
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>
      <HTMLJSXConverter />
    </>
  );
}

export default htmljsxConverterPage;

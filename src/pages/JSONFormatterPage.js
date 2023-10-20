import JSONFormatter from "../components/formatters/JSONFormatter";
import Head from "next/head";

function JSONFormatterPage() {
  return (
    <>
      <Head>
        <title>DevLoom JSON Formatter - Enhance Your JSON Formatting</title>
      </Head>
      <meta
        name="description"
        content="Boost your JSON workflow with DevLoom JSON Formatter. Simplify code formatting and beautification specifically for JSON."
      />
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
      <JSONFormatter />
    </>
  );
}

export default JSONFormatterPage;

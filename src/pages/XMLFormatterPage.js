import XMLFormatter from "../components/formatters/XMLFormatter";
import Head from "next/head";

function XMLFormatterPage() {
  return (
    <>
      <Head>
        <title>DevLoom XML Formatter - Streamline Your XML Formatting</title>
        <meta
          name="description"
          content="Improve your XML workflow with DevLoom XML Formatter. Simplify code formatting and beautification specifically for XML."
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
      <XMLFormatter />
    </>
  );
}

export default XMLFormatterPage;

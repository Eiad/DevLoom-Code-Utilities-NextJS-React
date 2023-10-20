import CSSFormatter from "../components/formatters/CSSFormatter";
import Head from "next/head";

function CSSFormatterPage() {
  return (
    <>
      <Head>
        <title>DevLoom CSS Formatter - Streamline Your CSS Formatting</title>
        <meta
          name="description"
          content="Enhance your CSS workflow with DevLoom CSS Formatter. Simplify code formatting and beautification specifically for CSS."
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
      <CSSFormatter />
    </>
  );
}

export default CSSFormatterPage;

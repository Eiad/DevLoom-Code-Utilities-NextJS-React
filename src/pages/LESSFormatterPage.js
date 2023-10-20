import LESSFormatter from "../components/formatters/LESSFormatter";
import Head from "next/head";

function LESSFormatterPage() {
  return (
    <>
      <Head>
        <title>DevLoom LESS Formatter - Enhance Your LESS Formatting</title>
        <meta
          name="description"
          content="Boost your LESS workflow with DevLoom LESS Formatter. Simplify code formatting and beautification specifically for LESS. 
   - Meta Keywords: LESS formatter, code beautifier, code formatter, DevLoom"
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
      <LESSFormatter />
    </>
  );
}

export default LESSFormatterPage;

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
          Simplify your HTML coding with DevLoom&#39;s HTML Formatter.
          Experience effortless code beautification and formatting tailored
          specifically for HTML. Get started and see the magic unfold!
        </p>
        <p className="get-started">No ads - No Bullshit ;)</p>
      </div>
      <HTMLFormatter />
    </>
  );
}

export default HTMLFormatterPage;

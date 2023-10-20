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
          Boost your LESS workflow with DevLoom&#39;s LESS Formatter. Simplify
          your code formatting and beautification tasks with our specialized
          tool. Start optimizing your LESS now!
        </p>
        <p className="get-started">No ads - No Bullshit ;)</p>
      </div>
      <LESSFormatter />
    </>
  );
}

export default LESSFormatterPage;

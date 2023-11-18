import LESSFormatter from "../../components/formatters/LESSFormatter";
import Head from "next/head";

function LESSFormatterPage() {
  return (
    <>
      <Head>
        <title>
          Optimize Your LESS Formatting with DevLoom Online Free LESS Formatter
        </title>
        <meta
          name="description"
          content="Boost your LESS workflow with DevLoom LESS Formatter. Simplify code formatting and beautification specifically for LESS. 
   - Meta Keywords: LESS formatter, code beautifier, code formatter, DevLoom"
        />
      </Head>
      <div className="top-section">
        <h1>Optimize Your LESS Formatting with DevLoom&#39;s LESS Formatter</h1>
        <p>
          Enhance Your LESS Workflow Using DevLoom&#39;s LESS Formatter.
          Streamline the Process of Code Formatting and Beautification with Our
          Specialized Tool. Get Started with LESS Optimization Today!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>
      <LESSFormatter />
    </>
  );
}

export default LESSFormatterPage;

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
        <h1>DevLoom JSON Formatter - Enhance Your JSON Formatting</h1>
        <p>
          Boost your JSON workflow with DevLoom&#39;s JSON Formatter. Simplify
          your code formatting and beautification tasks and focus on creating.
          Start your journey with us today!
        </p>
        <p className="get-started">No ads - No Bullshit ;)</p>
      </div>
      <JSONFormatter />
    </>
  );
}

export default JSONFormatterPage;

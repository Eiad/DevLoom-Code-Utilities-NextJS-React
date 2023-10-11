import JSONFormatter from "../components/JSONFormatter";
import Head from "next/head";

function JSONFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom JSON Formatter - Effortless Code Beautification and Formatting
          HTML Tool
        </title>
      </Head>
      <div>
        <h2>JSON Formatter</h2>
        <JSONFormatter />
        {/* Any other additional elements specific to this page */}
      </div>
    </>
  );
}

export default JSONFormatterPage;

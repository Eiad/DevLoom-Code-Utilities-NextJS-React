import JSONFormatter from "../components/formatters/JSONFormatter";
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
      <div className="main-body">
        <JSONFormatter />
      </div>
    </>
  );
}

export default JSONFormatterPage;

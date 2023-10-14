import HTMLFormatter from "../components/formatters/HTMLFormatter";
import Head from "next/head";

function HTMLFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom HTML Formatter - Effortless Code Beautification and Formatting
          HTML Tool
        </title>
      </Head>
      <div className="main-body">
        <HTMLFormatter />
      </div>
    </>
  );
}

export default HTMLFormatterPage;

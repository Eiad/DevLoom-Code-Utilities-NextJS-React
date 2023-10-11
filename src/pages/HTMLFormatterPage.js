import HTMLFormatter from "../components/HTMLFormatter";
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
      <div>
        <HTMLFormatter />
        {/* Any other additional elements specific to this page */}
      </div>
    </>
  );
}

export default HTMLFormatterPage;

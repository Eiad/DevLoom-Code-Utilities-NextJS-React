import HTMLJSXConverter from "../components/converters/HTMLJSXConverter";

import Head from "next/head";

function htmljsxConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom HTML to JSX Formatter - Effortless Code Beautification and
          Formatting HTML Tool
        </title>
      </Head>
      <div>
        <HTMLJSXConverter />
      </div>
    </>
  );
}

export default htmljsxConverterPage;

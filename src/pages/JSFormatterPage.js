import JSFormatter from "../components/formatters/JSFormatter";
import Head from "next/head";

function JSFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom javaScript Formatter - Effortless Code Beautification and
          Formatting HTML Tool
        </title>
      </Head>
      <div className="main-body">
        <JSFormatter />
      </div>
    </>
  );
}

export default JSFormatterPage;

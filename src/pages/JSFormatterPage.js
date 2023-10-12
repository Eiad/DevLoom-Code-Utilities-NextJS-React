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
      <div>
        <JSFormatter />
        {/* Any other additional elements specific to this page */}
      </div>
    </>
  );
}

export default JSFormatterPage;

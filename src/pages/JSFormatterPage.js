import JSFormatter from "../components/JSFormatter";
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
        <h2>JavaScript Formatter</h2>
        <JSFormatter />
        {/* Any other additional elements specific to this page */}
      </div>
    </>
  );
}

export default JSFormatterPage;

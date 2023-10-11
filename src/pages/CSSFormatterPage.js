import CSSFormatter from "../components/CSSFormatter";
import Head from "next/head";

function CSSFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom CSS Formatter - Effortless Code Beautification and Formatting
          HTML Tool
        </title>
      </Head>
      <div>
        <h2>CSS Formatter</h2>
        <CSSFormatter />
        {/* Any other additional elements specific to this page */}
      </div>
    </>
  );
}

export default CSSFormatterPage;

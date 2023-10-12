import CSSFormatter from "../components/formatters/CSSFormatter";
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
        <CSSFormatter />
        {/* Any other additional elements specific to this page */}
      </div>
    </>
  );
}

export default CSSFormatterPage;

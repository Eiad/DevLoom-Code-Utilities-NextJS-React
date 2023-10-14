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
      <CSSFormatter />
    </>
  );
}

export default CSSFormatterPage;

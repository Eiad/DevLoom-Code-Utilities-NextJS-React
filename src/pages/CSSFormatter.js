import CSSFormatter from "../components/formatters/CSSFormatter";
import Head from "next/head";

function CSSFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom Online Free CSS Formatter - Streamline Your CSS Formatting
        </title>
        <meta
          name="description"
          content="Enhance your CSS workflow with DevLoom CSS Formatter. Simplify code formatting and beautification specifically for CSS."
        />
      </Head>
      <div className="top-section">
        <h1>DevLoom CSS Formatter - Streamline Your CSS Formatting</h1>
        <p>
          Streamline your CSS formatting with DevLoom&#39;s CSS Formatter. Our
          tool makes code beautification a breeze, allowing you to focus on what
          truly matters. Start optimizing your CSS now!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>
      <CSSFormatter />
    </>
  );
}

export default CSSFormatterPage;

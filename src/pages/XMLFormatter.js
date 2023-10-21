import XMLFormatter from "../components/formatters/XMLFormatter";
import Head from "next/head";

function XMLFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom Online Free XML Formatter - Streamline Your XML Formatting
        </title>
        <meta
          name="description"
          content="Improve your XML workflow with DevLoom XML Formatter. Simplify code formatting and beautification specifically for XML."
        />
      </Head>
      <div className="top-section">
        <h1>DevLoom XML Formatter - Streamline Your XML Formatting</h1>
        <p>
          Improve your XML workflow with DevLoom&#39;s XML Formatter. Experience
          effortless code beautification and formatting designed specifically
          for XML. Give it a try and elevate your coding!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>
      <XMLFormatter />
    </>
  );
}

export default XMLFormatterPage;

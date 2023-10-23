import TypeScriptFormatter from "../components/formatters/TypeScriptFormatter";
import Head from "next/head";

function TypeScriptFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom Online Free TypeScript Formatter - Optimize Your TypeScript
          Coding
        </title>
        <meta
          name="description"
          content="Elevate your TypeScript development with DevLoom TypeScript Formatter. Seamless code beautification and formatting engineered for TypeScript."
        />
      </Head>
      <div className="top-section">
        <h1>DevLoom TypeScript Formatter - Optimize Your TypeScript Coding</h1>
        <p>
          Streamline your TypeScript development with DevLoom&#39;s TypeScript
          Formatter. Take advantage of effortless code beautification and
          formatting specifically designed for TypeScript. Get started and level
          up your coding!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>

      <TypeScriptFormatter />
    </>
  );
}

export default TypeScriptFormatterPage;

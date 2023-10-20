import JSONYAMLConverter from "../components/converters/JSONYAMLConverter";

import Head from "next/head";

function JSONYAMLConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom JSON to YAML Converter - Streamline Your Code Conversion
        </title>
        <meta
          name="description"
          content="Simplify code conversion with DevLoom JSON to YAML Converter. Enhance your development workflow with our efficient conversion tool."
        />
      </Head>
      <div className="top-section">
        <h1>Meet DevLoom: Every Developer&#39;s Good Friend</h1>
        <p>
          Simplify your code conversion tasks with DevLoom&#39;s JSON to YAML
          Converter. Enhance your development workflow with our efficient
          conversion tool. Start converting and save your valuable time!
        </p>
        <p className="get-started">No ads - No Bullshit ;)</p>
      </div>
      <JSONYAMLConverter />
    </>
  );
}

export default JSONYAMLConverterPage;

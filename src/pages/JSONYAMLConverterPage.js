import JSONYAMLConverter from "../components/converters/JSONYAMLConverter";

import Head from "next/head";

function JSONYAMLConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom JSON to YAML Converter - Effortless Code converter
        </title>
      </Head>
      <div className="main-body">
        <JSONYAMLConverter />
      </div>
    </>
  );
}

export default JSONYAMLConverterPage;

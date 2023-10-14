import JSONYAMLConverter from "../components/converters/JSONYAMLConverter";

import Head from "next/head";

function JSONYAMLConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom JSON to YAML Formatter - Effortless Code converter
        </title>
      </Head>
      <div>
        <JSONYAMLConverter />
      </div>
    </>
  );
}

export default JSONYAMLConverterPage;

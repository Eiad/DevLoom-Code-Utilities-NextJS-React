import YAMLJSONConverter from "../components/converters/YAMLJSONConverter";

import Head from "next/head";

function YAMLJSONConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom JSON to YAML Formatter - Effortless Code converter
        </title>
      </Head>
      <div>
        <YAMLJSONConverter />
      </div>
    </>
  );
}

export default YAMLJSONConverterPage;

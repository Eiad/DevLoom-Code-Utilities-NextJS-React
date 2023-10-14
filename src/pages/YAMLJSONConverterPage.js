import YAMLJSONConverter from "../components/converters/YAMLJSONConverter";

import Head from "next/head";

function YAMLJSONConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom YAML to JSON Converter - Effortless Code converter
        </title>
      </Head>
      <div className="main-body">
        <YAMLJSONConverter />
      </div>
    </>
  );
}

export default YAMLJSONConverterPage;
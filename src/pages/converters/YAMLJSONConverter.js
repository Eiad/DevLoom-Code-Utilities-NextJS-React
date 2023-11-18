import YAMLJSONConverter from "../../components/converters/YAMLJSONConverter";
import Head from "next/head";

function YAMLJSONConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom Online Free YAML to JSON Converter - Optimize Your Code
          Conversion
        </title>
        <meta
          name="description"
          content="Make code conversion seamless with DevLoom YAML to JSON Converter. Improve your development workflow with our effective conversion tool. "
        />
      </Head>
      <div className="top-section">
        <h1>DevLoom YAML to JSON Converter - Optimize Your Code Conversion</h1>
        <p>
          Make code conversion seamless with DevLoom&#39;s YAML to JSON
          Converter. Improve your development workflow with our effective
          conversion tool. Give it a try and feel the power of efficient coding!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>
      <YAMLJSONConverter />
    </>
  );
}

export default YAMLJSONConverterPage;

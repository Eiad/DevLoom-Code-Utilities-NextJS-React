import YAMLJSONConverter from "../components/converters/YAMLJSONConverter";
import Head from "next/head";

function YAMLJSONConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom YAML to JSON Converter - Optimize Your Code Conversion
        </title>
        <meta
          name="description"
          content="Make code conversion seamless with DevLoom YAML to JSON Converter. Improve your development workflow with our effective conversion tool. "
        />
      </Head>
      <div className="top-section">
        <h1>Meet DevLoom: Every Developer&#39;s Good Friend</h1>
        <p>
          Dive into DevLoom, your hub for multi-language code formatting and
          conversion. Perfect codes from HTML, CSS, JavaScript, JSON, and more,
          or easily switch between diverse formats. With DevLoom, elevate every
          coding session.
        </p>
        <p className="get-started">No ads - No Bullshit ;)</p>
      </div>
      <YAMLJSONConverter />
    </>
  );
}

export default YAMLJSONConverterPage;

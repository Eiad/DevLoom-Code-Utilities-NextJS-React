import HTMLEntityEncoder from "../components/converters/HTMLEntityEncoder";
import Head from "next/head";

function HTMLEntityEncoderPage() {
  return (
    <>
      <Head>
        <title>DevLoom HTML Entity Encoder/Decoder</title>
        <meta
          name="description"
          content="Optimize your web development with DevLoom HTML Entity Encoder/Decoder. Convert characters to their HTML entity representation or decode entities back to their original characters effortlessly."
        />
      </Head>

      <div className="top-section">
        <h1>
          DevLoom HTML Entity Encoder/Decoder - Simplify Your Web Development
        </h1>
        <p>
          Make your web development smoother with DevLoom&#39;s HTML Entity
          Encoder/Decoder. Our tool offers a user-friendly way to transform
          characters to their HTML entity representation or decode entities back
          to their original form. Enhance your web content presentation today!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>

      <HTMLEntityEncoder />
    </>
  );
}

export default HTMLEntityEncoderPage;

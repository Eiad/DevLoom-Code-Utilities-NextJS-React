import JWTDebugger from "../components/converters/JWTDebugger";
import Head from "next/head";

function JWTDebuggerPage() {
  return (
    <>
      <Head>
        <title>DevLoom Base64 Encoder/Decoder</title>
        <meta
          name="description"
          content="Optimize your data processing with DevLoom Base64 Encoder/Decoder. Convert text to Base64 format or decode Base64 strings back to text effortlessly."
        />
      </Head>

      <div className="top-section">
        <h1>
          DevLoom Base64 Encoder/Decoder - Simplify Your Data Encoding &
          Decoding
        </h1>
        <p>
          Make your data encoding and decoding seamless with DevLoom&#39;s
          Base64 Encoder/Decoder. Our tool offers a user-friendly way to
          transform text to Base64 or decode Base64 strings. Enhance your data
          processing workflow today!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>

      <JWTDebugger />
    </>
  );
}

export default JWTDebuggerPage;

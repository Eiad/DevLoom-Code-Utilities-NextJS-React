import Head from "next/head";
import JWTDebugger from "../../components/debugger/JWTDebugger";

function JWTDebuggerPage() {
  return (
    <>
      <Head>
        <title>DevLoom JWT Debugger - Verify, Create, Decode JWTs</title>
        <meta
          name="description"
          content="Empower your JWT operations with DevLoom JWT Debugger. Verify the authenticity of your JWT, create new tokens, or decode existing ones with ease. Your essential tool for JWT debugging and operations."
        />
      </Head>

      <div className="top-section">
        <h1>
          DevLoom JWT Debugger - The Ultimate JWT Verification, Creation &
          Decoding Tool
        </h1>
        <p>
          Experience effortless JWT operations with DevLoom&#39;s JWT Debugger.
          Designed for developers, our tool enables seamless JWT verification,
          token creation, and decoding. Enhance your JWT workflows and debugging
          processes today!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>

      <JWTDebugger />
    </>
  );
}

export default JWTDebuggerPage;

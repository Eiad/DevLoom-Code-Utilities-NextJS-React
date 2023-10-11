import "../app/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          DevLoom Formatter - Effortless Code Beautification and Formatting Tool
        </title>
        <meta
          name="description"
          content="Elevate your coding experience with DevLoom Formatter. Simplify code formatting and beautification for HTML, JavaScript, CSS, and JSON effortlessly. Streamline your development workflow with our powerful code beautifier tool."
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

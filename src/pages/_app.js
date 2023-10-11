import "../app/globals.css";
import Image from "next/image";
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
      <section className="header-logo text-center">
        <a href="#">
          <Image
            src="/devloom-logo.jpg"
            width={205}
            height={124}
            alt="Devloom logo"
          />
        </a>
      </section>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

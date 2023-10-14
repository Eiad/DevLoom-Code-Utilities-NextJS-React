import "../app/globals.css";
import Head from "next/head";
import MainMenu from "../components/MainMenu"; // Importing the MainMenu component

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
        <meta
          name="keywords"
          content="DevLoom Formatter, code beautifier, code formatter, HTML formatter, JavaScript formatter, CSS formatter, JSON formatter, code formatting tool, development workflow, coding experience, code optimization"
        />
      </Head>
      <div className="main-container">
        <section className="left-hand-column">
          <MainMenu />
        </section>
        <section className="right-hand-column">
          <Component {...pageProps} />
        </section>
      </div>
    </>
  );
}

export default MyApp;

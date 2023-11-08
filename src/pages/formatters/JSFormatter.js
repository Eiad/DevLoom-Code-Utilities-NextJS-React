import JSFormatter from "../../components/formatters/JSFormatter";
import Head from "next/head";

function JSFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom Online Free JavaScript Formatter - Optimize Your JavaScript
          Coding
        </title>
        <meta
          name="description"
          content="Improve your JavaScript coding with DevLoom JavaScript Formatter. Effortless code beautification and formatting designed for JavaScript."
        />
      </Head>
      <div className="top-section">
        <h1>DevLoom JavaScript Formatter - Optimize Your JavaScript Coding</h1>
        <p>
          Optimize your JavaScript coding with DevLoom&#39;s JavaScript
          Formatter. Experience effortless code beautification and formatting
          designed specifically for JavaScript. Give it a try and elevate your
          coding!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>
      <JSFormatter />
    </>
  );
}

export default JSFormatterPage;

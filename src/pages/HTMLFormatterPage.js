import HTMLFormatter from "../components/formatters/HTMLFormatter";
import MainMenu from "../components/mainMenu"; // Importing the MainMenu component
import Head from "next/head";

function HTMLFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom HTML Formatter - Effortless Code Beautification and Formatting
          HTML Tool
        </title>
      </Head>
      <div className="main-body">
        <MainMenu />
        <HTMLFormatter />
        {/* Any other additional elements specific to this page */}
      </div>
    </>
  );
}

export default HTMLFormatterPage;

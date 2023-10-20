import MARKDOWNPreviewer from "../components/MARKDOWNPreviewer";
import Head from "next/head";

function MARKDOWNPreviewerPage() {
  return (
    <>
      <Head>
        <title>DevLoom Markdown Previewer - Live Preview for Markdown</title>
        <meta
          name="description"
          content="Enhance your Markdown editing with DevLoom Markdown Previewer. Get live previews of your Markdown content to streamline your writing process."
        />
      </Head>
      <div className="top-section">
        <h1>Meet DevLoom: Every Developer&#39;s Good Friend</h1>
        <p>
          Enhance your Markdown editing with DevLoom&#39;s Markdown Previewer.
          Get live previews of your Markdown files to streamline your writing
          process. Start previewing and feel the ease of writing!
        </p>
        <p className="get-started">No ads - No Bullshit ;)</p>
      </div>
      <MARKDOWNPreviewer />
    </>
  );
}

export default MARKDOWNPreviewerPage;

import HTMLPreviewer from "../components/previewers/HTMLPreviewer";
import Head from "next/head";

function HTMLPreviewerPage() {
  return (
    <>
      <Head>
        <title>
          Experience the power of DevLoom Online Free HTML Previewer - Real-time
          HTML Code Preview.
        </title>
        <meta
          name="description"
          content="Elevate your HTML editing using DevLoom&#39;s HTML Previewer. Obtain dynamic previews of your HTML content to simplify your writing workflow."
        />
      </Head>
      <div className="top-section">
        <h1>DevLoom HTML Previewer - Live Preview for HTML</h1>
        <p>
          Improve your HTML editing experience with DevLoom&#39;s HTML
          Previewer. Access real-time previews of your HTML documents to
          streamline your content creation. Begin previewing and enjoy the
          convenience of writing effortlessly!
        </p>
        <p className="get-started">No ads - No Bullshit ;)</p>
      </div>
      <HTMLPreviewer />
    </>
  );
}

export default HTMLPreviewerPage;

import LoremIpsum from "../components/loremipsum/LoremIpsum";
import Head from "next/head";

function LoremIpsumPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom Lorem Ipsum Generator: Create Placeholder Text Effortlessly
        </title>
        <meta
          name="description"
          content="Simplify your design and development process with DevLoom Lorem Ipsum Generator. Generate customizable placeholder text in seconds to speed up your project workflow. Try it now."
        />
      </Head>
      <div className="top-section">
        <h1>DevLoom Lorem Ipsum Generator: Accelerate Your Design Workflow</h1>
        <p>
          Elevate your design and development process with DevLoom&#39;s Free
          online Lorem Ipsum Generator. Create customizable placeholder text in
          seconds to enrich your projects. Start generating now for a
          hassle-free design experience!
        </p>

        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>
      <LoremIpsum />
    </>
  );
}

export default LoremIpsumPage;

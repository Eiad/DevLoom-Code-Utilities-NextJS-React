import Base64ImageEncoder from "../../components/converters/Base64ImageEncoder";
import Head from "next/head";

function Base64ImageEncoderPage() {
  return (
    <>
      <Head>
        <title>DevLoom Base64 Image Encoder/Decoder</title>
        <meta
          name="description"
          content="Streamline your image handling with DevLoom Base64 Image Encoder/Decoder. Easily convert images to Base64 format or decode Base64 strings to images with our intuitive tool."
        />
      </Head>

      <div className="top-section">
        <h1>
          DevLoom Base64 Image Encoder/Decoder - Streamline Image Encoding &
          Decoding
        </h1>
        <p>
          Enhance your image processing with DevLoom's Base64 Image
          Encoder/Decoder. Our platform provides a smooth way to encode images
          into Base64 strings and decode them back into images. Optimize your
          workflow with our straightforward tool.
        </p>
        <p className="get-started">
          No ads - No Trackers - Just straightforward image processing ;)
        </p>
      </div>

      <Base64ImageEncoder />
    </>
  );
}

export default Base64ImageEncoderPage;

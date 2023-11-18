import StringCaseConverter from "../../components/converters/StringCaseConverter";
import Head from "next/head";
import "../../app/css/previewers.css";

function StringCaseConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom String Case Converter - Easily Convert Text to Different Case
          Styles
        </title>
        <meta
          name="description"
          content="Effortlessly transform text with DevLoom&#39;s String Case Converter. Convert to camelCase, PascalCase, snake_case, and more. Ideal for developers, content creators, and anyone needing versatile text formatting."
        />
      </Head>

      <div className="top-section">
        <h1>DevLoom String Case Converter - Transform Text with Ease</h1>
        <p>
          Simplify your text formatting with DevLoom&#39;s String Case
          Converter. Our tool allows you to effortlessly convert strings into
          various case styles, such as camelCase, PascalCase, snake_case,
          kebab-case, and more.
        </p>
        <p>
          Perfect for developers, content creators, and digital marketers, our
          String Case Converter is designed to make text manipulation simple and
          efficient. Enhance your coding and content creation workflow with our
          user-friendly interface.
        </p>
        <p className="get-started">
          Free to Use - Intuitive Design - Versatile Text Conversion
        </p>
      </div>

      <StringCaseConverter />
    </>
  );
}

export default StringCaseConverterPage;

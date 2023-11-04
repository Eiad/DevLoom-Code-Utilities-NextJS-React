import NumerBaseConverter from "../components/converters/NumerBaseConverter";
import Head from "next/head";

function NumerBaseConverterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom Online Free Number Base Converter - Convert Between Binary,
          Decimal, Hex, and More
        </title>
        <meta
          name="description"
          content="Effortlessly convert numbers between different bases with DevLoom&#39;s Number Base Converter. Support for binary, decimal, octal, hexadecimal, and custom bases. Optimize your number conversion process with our user-friendly tool."
        />
      </Head>
      <div className="top-section">
        <h1>
          DevLoom Number Base Converter - Convert Between Bases in Seconds
        </h1>
        <p>
          Streamline your numerical conversions with DevLoom&#39;s Number Base
          Converter. This intuitive tool allows for quick and accurate
          conversions between various number bases such as binary, decimal,
          octal, hexadecimal, and any custom base up to 36. Perfect for
          developers, students, and anyone working with different numeral
          systems.
        </p>
        <p className="get-started">
          Simplify your conversions - Accurate, Fast, and Completely Free.
        </p>
      </div>
      <NumerBaseConverter />
    </>
  );
}

export default NumerBaseConverterPage;

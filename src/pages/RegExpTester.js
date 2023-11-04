import RegExpTester from "../components/debuggers/RegExpTester";
import Head from "next/head";

function RegExpTesterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom RegExp Tester - Test and Learn Regular Expressions Easily
        </title>
        <meta
          name="description"
          content="Master regular expressions with DevLoom&#39;s RegExp Tester. Test your patterns, find matches, and learn RegEx with real-time results. Perfect for beginners and experts alike."
        />
      </Head>

      <div className="top-section">
        <h1>DevLoom RegExp Tester - Fine-tune Your Pattern Matching Skills</h1>
        <p>
          Streamline your RegEx testing with DevLoom&#39;s RegExp Tester. Our
          interactive tool provides instant feedback on your regular
          expressions, making it easier to match, search, and extract data like
          a pro.
        </p>
        <p>
          Whether you&#39;re crafting complex patterns or learning the basics,
          our RegExp Tester is designed to support and enhance your development
          workflow. Get precise with your patterns today!
        </p>
        <p className="get-started">
          Free to Use - User-Friendly - Efficient RegEx Testing
        </p>
      </div>

      <RegExpTester />
    </>
  );
}

export default RegExpTesterPage;

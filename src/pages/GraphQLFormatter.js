import GraphQLFormatter from "../components/formatters/GraphQLFormatter";
import Head from "next/head";

function GraphQLFormatterPage() {
  return (
    <>
      <Head>
        <title>
          DevLoom Online Free GraphQL Formatter - Optimize Your GraphQL Queries
        </title>
        <meta
          name="description"
          content="Fine-tune your GraphQL queries with DevLoom GraphQL Formatter. Simplified query formatting and beautification tailored for GraphQL."
        />
      </Head>
      <div className="top-section">
        <h1>DevLoom GraphQL Formatter - Optimize Your GraphQL Queries</h1>
        <p>
          Fine-tune your GraphQL development with DevLoom's GraphQL Formatter.
          Experience simplified query formatting and beautification crafted
          explicitly for GraphQL. Give it a spin and elevate your GraphQL work!
        </p>
        <p className="get-started">No ads - No Trackers - No Bullshit ;)</p>
      </div>

      <GraphQLFormatter />
    </>
  );
}

export default GraphQLFormatterPage;

import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products page</title>
        <meta name="description" content="Products page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Products</h1>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import { AppContext } from "next/app";
import Head from "next/head";
import { AppConfig } from "../app-config";
import { Product } from "../models/product";

type HomeProps = {
  products: Product[];
};

export async function getServerSideProps(context: AppContext) {
  const res = await fetch(`${AppConfig.BASE_URL}/api/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products page</title>
        <meta name="description" content="Products page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Products</h1>

      {products.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </>
  );
};

export default Home;

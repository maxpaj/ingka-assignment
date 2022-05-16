import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { ProductWithDetails } from "../../models/product";
import { ProductsRepository } from "../../repository/products/products.repository";

type ProductPageProps = {
  product?: ProductWithDetails;
  error?: string;
};

const productsRepository = new ProductsRepository();

export const getServerSideProps: GetServerSideProps<
  { [key: string]: any },
  { id: string }
> = async (context) => {
  const idRaw = context.params && context.params.id;

  if (!idRaw) {
    return {
      props: {
        error: "Could not find a specified product ID",
      },
    };
  }

  try {
    const id = parseInt(idRaw);
    const product = await productsRepository.getById(id);

    return {
      props: {
        product,
      },
    };
  } catch (e) {
    const { message } = e as Error;

    return {
      props: {
        error: message,
      },
    };
  }
};

export default function ProductPage({ product, error }: ProductPageProps) {
  const router = useRouter();
  const { id } = router.query;

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Could not find product with ID {id}</p>;
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="product" />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
      </Head>

      <div className="flex gap-10">
        <Image
          className="mb-4 me-4"
          src={product.image}
          objectFit="cover"
          layout="fixed"
          width="400"
          height="400"
          alt=""
        />

        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="text-xl mb-2">${product.priceDollars}</div>
          <div className="mb-4">
            {product.rating.rate} ({product.rating.count} reviews)
          </div>
          <p className="first-letter:uppercase">{product.description}</p>
        </div>
      </div>
    </>
  );
}

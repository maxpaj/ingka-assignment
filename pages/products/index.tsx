import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ProductList } from "../../components/ProductList/ProductList";
import { Product } from "../../models/product";
import { ProductsRepository } from "../../repository/products/products.repository";

type ProductsPageProps = {
  products: Product[];
  error?: string;
};

type PriceRange = {
  min: number;
  max?: number;
};

const productsRepository = new ProductsRepository();

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const products = await productsRepository.getAll();

    return {
      props: {
        products,
      },
    };
  } catch (e) {
    const { message } = e as Error;

    return {
      props: {
        products: [],
        error: message,
      },
    };
  }
};

const priceRangeFilters: PriceRange[] = [
  {
    min: 0,
    max: 50,
  },
  {
    min: 50,
    max: 100,
  },
  {
    min: 100,
  },
];

const defaultPriceFilter: PriceRange = {
  min: 0,
};

function ProductsPage({ products, error }: ProductsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<PriceRange>(defaultPriceFilter);

  if (error) {
    return <p>{error}</p>;
  }

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      p.priceDollars >= priceRange.min &&
      p.priceDollars <= (priceRange?.max || Number.MAX_SAFE_INTEGER)
  );

  return (
    <>
      <Head>
        <title>Products page</title>
        <meta name="description" content="Products page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl mb-4 font-bold">Products</h1>

      <div>
        <div className="me-2">
          <label htmlFor="search" className="mb-2 block">
            Search
          </label>

          <Input
            id="search"
            value={searchTerm}
            className="mb-4"
            onChange={(e) =>
              setSearchTerm((e.target as HTMLInputElement).value)
            }
            placeholder="Search for products, by name or description"
          />
        </div>

        <div>
          <label className="mb-2 block">Price</label>
          <div className="flex align-center gap-2 mb-4">
            {priceRangeFilters.map((prf) => {
              const isSelected = prf === priceRange;

              return (
                <Button
                  selected={isSelected}
                  key={prf.min}
                  onClick={(_) => setPriceRange(prf)}
                >
                  ${prf.min} - {prf.max && `$${prf.max}`}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      <ProductList products={filteredProducts} />

      <div className="my-4 text-center text-sm">
        {filteredProducts.length === 0 ? (
          <>No matching products</>
        ) : (
          <>
            Showing {filteredProducts.length} out of {products.length}
          </>
        )}
      </div>
    </>
  );
}

export default ProductsPage;

import { Product } from "../../models/product";
import { ProductCard } from "../ProductCard/ProductCard";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="m-0 flex w-100 flex-wrap gap-5" data-testid="product-list">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          imageSrc={p.image}
          title={p.title}
          priceDollars={p.priceDollars}
        />
      ))}
    </div>
  );
}

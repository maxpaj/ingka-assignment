import Link from "next/link";
import { Card } from "../Card/Card";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  id: number;
  title: string;
  imageSrc: string;
  priceDollars: number;
};

export function ProductCard({
  id,
  title,
  imageSrc,
  priceDollars,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className={styles.productCard}>
        <Card
          aria-label={`Click to see details about ${title}`}
          imageSrc={imageSrc}
          title={title}
        >
          <div className={styles.productPrice}>
            <span>Price</span>
            <span data-testid="product-card-price">${priceDollars}</span>
          </div>
        </Card>
      </div>
    </Link>
  );
}

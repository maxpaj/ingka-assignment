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
      <div className="group cursor-pointer">
        <Card
          aria-label={`Click to see details about ${title}`}
          imageSrc={imageSrc}
          imageAlt={title}
        >
          <h3
            className="text-sm group-hover:underline font-bold uppercase"
            data-testid="card-title"
          >
            {title}
          </h3>

          <div
            data-testid="product-card-price"
            className="flex justify-between text-sm"
          >
            ${priceDollars}
          </div>
        </Card>
      </div>
    </Link>
  );
}

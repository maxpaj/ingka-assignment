import Image from "next/image";
import { HTMLProps } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  imageSrc: string;
} & HTMLProps<HTMLDivElement>;

export function Card({
  title,
  imageSrc,
  className = "",
  children = <></>,
  ...props
}: CardProps) {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      <div className={styles.cardImage}>
        <Image
          data-testid="card-image"
          src={imageSrc}
          objectFit="cover"
          layout="fixed"
          width="200"
          height="200"
          alt={title}
        />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle} data-testid="card-title">
          {title}
        </h3>

        {children}
      </div>
    </div>
  );
}

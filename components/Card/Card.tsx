import Image from "next/image";
import { HTMLProps } from "react";

type CardProps = {
  imageAlt?: string;
  imageSrc: string;
} & HTMLProps<HTMLDivElement>;

export function Card({
  imageAlt,
  imageSrc,
  className = "",
  children = <></>,
  ...props
}: CardProps) {
  return (
    <div className={`border w-56 border-gray-300 ${className}`} {...props}>
      <div className="relative h-48">
        <Image
          data-testid="card-image"
          src={imageSrc}
          objectFit="cover"
          layout="fill"
          alt={imageAlt}
        />
      </div>

      <div className="pt-1 px-2 pb-2 border-t">{children}</div>
    </div>
  );
}

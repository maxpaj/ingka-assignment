import type { NextApiRequest, NextApiResponse } from "next";
import products from "./products.json";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products);
}

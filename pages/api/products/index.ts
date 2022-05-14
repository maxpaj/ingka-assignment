import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../models/product";
import products from "./products.json";

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products);
}

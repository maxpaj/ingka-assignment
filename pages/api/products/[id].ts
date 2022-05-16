import type { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { Product } from "../../../models/product";
import { ProductsRepository } from "../../../repository/products/products.repository";

const productsRepository = new ProductsRepository();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const id = parseInt(req.query.id as string);
  const product = await productsRepository.getById(id);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  res.status(200).json(product);
}

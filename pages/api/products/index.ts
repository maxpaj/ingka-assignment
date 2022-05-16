import type { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { Product } from "../../../models/product";
import { ProductsRepository } from "../../../repository/products/products.repository";

const productsRepository = new ProductsRepository();

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  try {
    const products = await productsRepository.getAll();

    return res.status(200).json(
      products.map((p) => {
        const { id, title, image, priceDollars } = p;
        return { id, title, image, priceDollars };
      })
    );
  } catch (error) {
    throw new ApiError(500, "Could not fetch products");
  }
}

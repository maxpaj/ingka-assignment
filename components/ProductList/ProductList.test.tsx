import { render, screen } from "@testing-library/react";
import { ProductList } from "./ProductList";

describe("ProductList", () => {
  it("should display a list of products", () => {
    render(
      <ProductList
        products={[
          {
            id: 0,
            image: "https://image.jpg",
            priceDollars: 10,
            title: "Product 0",
          },
          {
            id: 1,
            image: "https://image.jpg",
            priceDollars: 10,
            title: "Product 1",
          },
        ]}
      />
    );
    const productList = screen.getByTestId("product-list");
    expect(productList.children).toHaveLength(2);
  });
});

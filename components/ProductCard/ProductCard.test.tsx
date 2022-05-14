import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";

describe("ProductCard", () => {
  it("should render price of the product", () => {
    render(
      <ProductCard
        id={0}
        title={"Card title"}
        imageSrc="https://image-src.jpg"
        priceDollars={100}
      />
    );

    const price = screen.getByTestId("product-card-price");
    expect(price).toContainHTML("$100");
  });
});

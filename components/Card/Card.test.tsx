import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("should display an image in the card", () => {
    render(<Card title={"Card title"} imageSrc="https://image-src.jpg" />);
    const title = screen.getByTestId("card-image");
    expect(title).toBeInTheDocument();
  });

  it("should render any children", () => {
    render(
      <Card title={"Card title"} imageSrc="https://image-src.jpg">
        <p data-testid="card-child">Child content</p>
      </Card>
    );
    const child = screen.getByTestId("card-child");
    expect(child).toBeInTheDocument();
  });
});

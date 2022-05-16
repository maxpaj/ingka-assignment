import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should call the onClick callback when clicked", () => {
    let click = 0;

    render(
      <Button
        onClick={() => {
          click++;
        }}
      />
    );

    const button = screen.getByTestId("button");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(click).toBe(1);
  });
});

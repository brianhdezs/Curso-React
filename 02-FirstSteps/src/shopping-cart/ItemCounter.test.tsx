import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("shouold render with default values", () => {
    render(<ItemCounter name="Test Item" quantity={1} />);

    expect(screen.getByText("Test Item")).toBeDefined();
  });

  test("should render with a custom quantity"),
    () => {
      const name = "Control nintento";
      const quantity = 10;

      render(<ItemCounter name={name} quantity={quantity} />);
      expect(screen.getByText(quantity)).toBeDefined();
    };
});

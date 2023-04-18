import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "../components/Item";

test("renders the item name", () => {
  const itemName = "Milk";
  render(<Item name={itemName} />);

  expect(screen.getByText(itemName)).toBeInTheDocument();
});

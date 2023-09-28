import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";


describe("Counter Component", () => {
  it("Test that component renders initial value provided in props", () => {
    const initialValue = 0;
    const { getByText } = render(<Counter count={initialValue} />);
    const initialValueText = getByText(`Value: ${initialValue}`);
    expect(initialValueText).toBeInTheDocument();
  });

  it("Test that a click event on 'decrement' button decrements the displayed value", () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText("+ Increment");
    fireEvent.click(incrementButton);
    const counterElement = getByText(/Value: \d+/);
    expect(counterElement).toBeInTheDocument();
  });

  it("Test that a click event on 'increment' button increments the displayed value", () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText("- Decrement");
    fireEvent.click(decrementButton);
    const counterElement = getByText(/Value: -\d+/);
    expect(counterElement).toBeInTheDocument();
  });
});

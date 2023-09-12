import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

// Mock the setCount function
const mockSetCount = jest.fn();

describe("Test that component renders initial value provided in props", () => {
  it("fint element", () => {
    const initialValue = 0;
    const { getByText } = render(<Counter count={initialValue} />);
    const initialValueText = getByText(`Value: ${initialValue}`);
    expect(initialValueText).toBeInTheDocument();
  });
});

describe("Test that a click event on 'decrement' button decrements the displayed value", () => {
  it("fint element", () => {
    const initialValue = 0;
    const { getByText } = render(
      <Counter count={initialValue} setCount={mockSetCount} />
    );
    const decrementButton = getByText("Decrement");
    fireEvent.click(decrementButton);

    expect(mockSetCount).toHaveBeenCalledWith(initialValue - 1);
  });
});


describe("Test that a click event on 'increment' button increments the displayed value", () => {
    it("fint element", () => {
      const initialValue = 0;
      const { getByText } = render(
        <Counter count={initialValue} setCount={mockSetCount} />
      );
      const decrementButton = getByText("+ ADD MOVIE");
      fireEvent.click(decrementButton);
  
      expect(mockSetCount).toHaveBeenCalledWith(initialValue + 1);
    });
  });
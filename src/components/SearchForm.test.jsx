import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("Test Form", () => {
  it("Test that component renders an input with the value equal to initial value passed in props", () => {
    const initialValue = "What do you want to watch...";
    const { getByPlaceholderText } = render(
      <SearchForm initialQuery={initialValue} />
    );
    const inputElement = getByPlaceholderText("What do you want to watch...");

    expect(inputElement.value).toBe(initialValue);
  });

  it("Test that after typing to the input and a 'click' event on the Submit button, the 'onChange' prop is called with proper value", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchForm initialQuery="" onSearch={mockOnChange} />
    );
    const input = getByPlaceholderText("What do you want to watch...");
    const submitButton = getByText("SEARCH");

    fireEvent.change(input, { target: { value: "Test Movie" } });
    fireEvent.click(submitButton);

    expect(mockOnChange).toHaveBeenCalledWith("Test Movie");
  });

  it("Test that after typing to the input and pressing Enter key, the 'onChange' prop is called with proper value", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchForm initialQuery="" onSearch={mockOnChange} />
    );
    const input = getByPlaceholderText("What do you want to watch...");

    fireEvent.change(input, { target: { value: "Test Movie" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockOnChange).toHaveBeenCalledWith("Test Movie");
  });
});

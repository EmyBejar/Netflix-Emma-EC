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
    const typedValue = "What do you want to watch...";
    const onChangeMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchForm initialQuery="" onChange={onChangeMock} />
    );
    const inputElement = getByPlaceholderText("What do you want to watch...");
    const submitButton = getByText("SEARCH");

    fireEvent.change(inputElement, { target: { value: typedValue } });
    fireEvent.click(submitButton);

    expect(onChangeMock).toHaveBeenCalledWith(typedValue);
  });

  it("Test that after typing to the input and pressing Enter key, the 'onChange' prop is called with proper value", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchForm onChange={onChangeMock} />
    );
    const inputElement = getByPlaceholderText("What do you want to watch...");

    const typedValue = "What do you want to watch...";
    fireEvent.change(inputElement, { target: { value: typedValue } });
    fireEvent.keyPress(inputElement, { key: "Enter", code: 13, charCode: 13 });

    expect(onChangeMock).toHaveBeenCalledWith(typedValue);
  });
});

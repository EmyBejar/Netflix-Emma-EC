import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GenreSelect from "./GenreSelect";

describe("Tests Genre Select", () => {
  it("Test that component renders all genres passed in props", () => {
    const genres = ["Action", "Comedy", "Drama"];
    const { getByText } = render(
      <GenreSelect genres={genres} selectedGenre="" onSelect={() => {}} />
    );

    genres.forEach((genre) => {
      const genreButton = getByText(genre);
      expect(genreButton).toBeInTheDocument();
    });
  });

  it("Test that component highlights a selected genre passed in props", () => {
    const genres = ["Action", "Comedy", "Drama"];
    const selectedGenre = "Comedy";
    const { getByText } = render(
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={() => {}}
      />
    );

    const selectedGenreButton = getByText(selectedGenre);
    expect(selectedGenreButton).toHaveStyle("backgroundColor: green");
  });

  it("Test that after a click event on a genre button, component calls 'onChange' callback and passes the correct genre in arguments", () => {
    const genres = ["Action", "Comedy", "Drama"];
    const selectedGenre = "Comedy";
    const onChangeMock = jest.fn();
    const { getByText } = render(
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={onChangeMock}
      />
    );

    const genreToSelect = "Action";
    const genreButton = getByText(genreToSelect);
    fireEvent.click(genreButton);

    expect(onChangeMock).toHaveBeenCalledWith(genreToSelect);
  });
});

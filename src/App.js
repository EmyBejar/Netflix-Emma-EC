import SearchForm from "./components/SearchForm";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import { useState } from "react";
import Footers from "./components/Shared/Footers";

import header from "./img/header.png";
import MoviesAll from "./components/MoviesTile";
import MovieDetail from "./components/MovieDetails";

function App() {
  const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
  const [selectedGenre, setSelectedGenre] = useState("Action");

  const [movieDetail, setMovieDetail] = useState(false);
  const [dataMovie, setDataMovie] = useState({
    title: "",
    genre: "",
    duration: 0,
    rating: 0.0,
    synopsis: "",
    backgroundImage:''
  });

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#555",
        position: "absolute",
        width: "-webkit-fill-available",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: "cover",
          height: "29rem",
          marginBottom: "8rem",
          width: "77rem",
          marginLeft: "6rem",
        }}
      >
        {movieDetail && (
          <MovieDetail
            setMovieDetail={setMovieDetail}
            dataMovie={dataMovie}
          ></MovieDetail>
        )}

        {!movieDetail && (
          <>
            <SearchForm initialQuery="" onSearch={handleSearch}></SearchForm>
            <div
              style={{
                position: "absolute",
                backgroundColor: "rgba(96, 96, 96, 0.68)",
                color: "#F65261",
                marginTop: "-25rem",
                marginLeft: "60rem",
                width: "11.0625rem",
                height: "2.875rem",
                borderRadius: "0.25rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Counter></Counter>
            </div>
          </>
        )}
      </div>

      <div
        style={{
          display: "block",
          marginTop: "-7rem",
          marginLeft: "6rem",
          width: "75rem",
          height: "fit-content",
          padding: "1rem",
          backgroundColor: "#232323",
        }}
      >
        <GenreSelect
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        ></GenreSelect>
        <MoviesAll
          setMovieDetail={setMovieDetail}
          dataMovie={dataMovie}
          setDataMovie={setDataMovie}
        ></MoviesAll>
      </div>
      <Footers></Footers>
    </div>
  );
}

export default App;

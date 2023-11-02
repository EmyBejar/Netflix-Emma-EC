import SearchForm from "./components/SearchForm";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import { useState } from "react";
import Footers from "./components/Shared/Footers";

import header from "./img/header.png";
import MoviesAll from "./components/MoviesTile";
import MovieDetail from "./components/MovieDetails";

import Dialog from "./components/Shared/Dialog";

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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="div-principal-conteiner">
      <div className="div-second-conteiner">
        {movieDetail && (
          <MovieDetail
            setMovieDetail={setMovieDetail}
            dataMovie={dataMovie}
          ></MovieDetail>
        )}

        {!movieDetail && (
          <>
            <SearchForm initialQuery="" onSearch={handleSearch}></SearchForm>
            <div className="div-counter">
              <Counter></Counter>
            </div>
          </>
        )}
      </div>

      <div className="div-conteiner">
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
        

        <button onClick={openDialog}>Open Dialog</button>
      {isDialogOpen && (
        <Dialog title="My Custom Dialog" onClose={closeDialog}>
          <p>This is the custom content of the dialog.</p>
        </Dialog>
      )}

      </div>
      <Footers></Footers>
    </div>
  );
}

export default App;

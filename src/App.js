import SearchForm from "./components/SearchForm";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import { useState } from "react";
import Footers from "./components/Shared/Footers";

import header from "./img/header.png";

function App() {
 
  const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
  const [selectedGenre, setSelectedGenre] = useState("Action");

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div style={{ backgroundColor: "#555", position: "absolute",     width: "-webkit-fill-available",  }}>
      <div
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize:"cover",
          height: "29rem",
          marginBottom: "8rem",
          width: "77rem",
          marginRight: "9rem",
          marginLeft: "15rem",
        }}
      >
        <SearchForm initialQuery="What do you want to watch..."></SearchForm>
        <Counter></Counter>
      </div>
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      ></GenreSelect>

      <Footers></Footers>
    </div>
  );
}

export default App;

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

  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div style={{ backgroundColor: "#555", position: "absolute",  }}>
      <div
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize:"cover",
          height: "29rem",
          marginBottom: "8rem",
          width: "77rem",
          marginLeft: "8rem",
        }}
      >
        <SearchForm initialQuery="" onSearch={handleSearch}></SearchForm>
        <div style={{
          position: "absolute",
          backgroundColor: "rgba(96, 96, 96, 0.68)",
          color: "#F65261",
          marginTop: "-25rem",
          marginLeft: "60rem",
          width:"11.0625rem",
          height: "2.875rem",
          borderRadius: "0.25rem",
          border:"none",
          cursor: "pointer",
        }}>
           <Counter></Counter>
        </div>
       
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

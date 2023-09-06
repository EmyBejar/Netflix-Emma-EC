import SearchForm from "./components/SearchForm";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const genres = ["DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
  const [selectedGenre, setSelectedGenre] = useState("Action");

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };
  return (
    <div style={{ backgroundColor: "#555", position: "absolute" }}>
      <SearchForm initialQuery="What do you want to watch..."></SearchForm>
      <Counter count={count} setCount={setCount}></Counter>

      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      ></GenreSelect>
    </div>
  );
}

export default App;

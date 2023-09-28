
import SortControl from "./SortControl";

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  
  return (
    <div>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          style={{
            backgroundColor: genre === selectedGenre ? "green" : "#232323",
            color: "#ffff",
            border: "0",
            paddingRight: "4rem",
            height: "2rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
            cursor:"pointer"
          }}
        >
          {genre}
        </button>
      ))}
      <SortControl></SortControl>
      <hr style={{ color: "#424242", opacity: "0.3", width: "70rem" }} />
    </div>
  );
};

export default GenreSelect;
/*
export const GenreSelect = () => {
  return (<h1>Test GenreSelect</h1>);
}*/

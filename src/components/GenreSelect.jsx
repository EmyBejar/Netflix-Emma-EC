import MoviesAll from "./MoviesTile";
import SortControl from "./SortControl";

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  
  return (
    <div
      style={{
        display: "block",
        marginTop: "-7rem",
        marginLeft: "8rem",
        width: "75rem",
        height: "fit-content",
        padding: "1rem",
        backgroundColor: "#232323",
      }}
    >
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

      <MoviesAll></MoviesAll>
    </div>
  );
};

export default GenreSelect;
/*
export const GenreSelect = () => {
  return (<h1>Test GenreSelect</h1>);
}*/

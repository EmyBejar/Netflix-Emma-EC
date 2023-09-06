const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  return (
    <div
      style={{
        display: "block",
        marginTop: "-7rem",
        marginRight: "7rem",
        marginLeft: "7rem",
        width: "75rem",
        height: "107rem",
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
          }}
        >
          {genre}
        </button>
      ))}
      <hr style={{ color: "#424242", opacity: "0.3", width:"60rem" }} />
    </div>
  );
};

export default GenreSelect;

import React, { useState } from "react";

const SearchForm = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || "");

  const handleSearch = () => {
    console.log("Search handle");
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="What do you want to watch..."
        style={{
          backgroundColor: "rgba(50, 50, 50, 0.80)",
          borderColor: "rgba(50, 50, 50, 0.80)",
          width: "44.50rem",
          height: "2rem",
          fontSize: "1rem",
          color: "#fff",
          borderRadius: "0.25rem",
          opacity: "0.7",
          marginLeft:"7rem",
          marginRight: "1rem",
          marginTop:"19rem",
          marginBottom:"8rem",
          fontWeight:"400"
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          backgroundColor: "#F65261",
          borderColor: "#F65261",
          borderRadius:"0.25rem",
          width: "14ren",
          height: "2.5rem",
          color: "#fff",
        }}
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchForm;

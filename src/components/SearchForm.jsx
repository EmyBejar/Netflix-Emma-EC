import React, { useState } from "react";

const SearchForm = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || "");

  const handleSearch = () => {
    console.log("Search handle");
  };

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "row" }}>
        <label
          htmlFor="searchInput"
          style={{
            paddingTop: "12rem",
            color: "#fff",
            paddingLeft: "7rem",
            fontSize: "2.5rem",
            width: "-webkit-fill-available",
          }}
        >
          FIND YOUR MOVIE
        </label>
        <input
          type="text"
          id="searchInput"
          value={query}
          //  onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you want to watch..."
          style={{
            backgroundColor: "rgb(117 109 109)",
            borderColor: "rgba(50, 50, 50, 0.80)",
            width: "44.50rem",
            height: "2.8rem",
            fontSize: "1rem",
            borderRadius: "0.25rem",
            opacity: "0.7",
            marginLeft: "-70rem",
            marginRight: "1rem",
            marginTop: "16rem",
            marginBottom: "8rem",
            fontWeight: "400",
            border: "none",
            padding: "0.50rem",
            opacity: "0.3",
            color: "#fff",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            backgroundColor: "#F65261",
            borderColor: "#F65261",
            borderRadius: "0.25rem",
            width: "14.5625rem",
            height: "4rem",
            color: "#fff",
            marginTop: "16rem",
            cursor:"pointer"
          }}
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

/*
export const SearchForm = () => {
  return (<h1>Test</h1>);
}*/

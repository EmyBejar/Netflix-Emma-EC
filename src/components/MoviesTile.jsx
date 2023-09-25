import { useState } from "react";
import avangers from "../img/group-3@2x.png";
import killbill from "../img/group-5@2x.png";
import inception from "../img/group-41@2x.png";
import dogs from "../img/group-51@2x.png";
import bohemia from "../img/group-4@2x.png";
import MovieDetail from "./MovieDetails";
import Modal from "./Shared/Modal";

const MoviesAll = ({}) => {
  const movies = ["Avangers", "KillBill", "Inception", "Dogs", "Bohemia"];

  const [modal, setModal] = useState(false);

  const handleSelectMovie = (e) => {
    console.log("Click movie", e);
    setModal(true);
  };

  console.log("movies", movies);
  //style={{ marginTop: "2.5rem", marginLeft: "2rem" }}
  /*return (
    <div>
      {movies.map((movie) => {
        <div
          key={movie}
          style={{
            width: "20rem",
            height: "25rem",
            border: "1px solid #fff",
            padding: "0.50rem",
            opacity: "0.9",
          }}
        >
          {movie}
        </div>;
      })}
    </div>
  );*/

  return (
    <div style={{ alignItems: "center", paddingTop: "3.5rem" }}>
      <div
        style={{
          display: "flex",
          color: "#fff",
          gap: "3.4rem",
          marginBottom: "2rem",
          paddingLeft: "2.5rem",
        }}
      >
        <div
          onClick={handleSelectMovie}
          id="avanger"
          style={{
            width: "20rem",
            height: "25rem",
            padding: "0.50rem",
            opacity: "0.9",
            backgroundImage: `url(${avangers})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        ></div>

        <div
        onClick={handleSelectMovie}
        id="killbi"
          style={{
            width: "20rem",
            height: "25rem",
            padding: "0.50rem",
            opacity: "0.9",
            backgroundImage: `url(${killbill})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        ></div>
        <div
        onClick={handleSelectMovie}
        id="inception"
          style={{
            width: "20rem",
            height: "25rem",
            padding: "0.50rem",
            opacity: "0.9",
            backgroundImage: `url(${inception})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        ></div>
      </div>

      <div
      onClick={handleSelectMovie}
      id=""
        style={{
          display: "flex",
          color: "#fff",
          gap: "3.4rem",
          marginBottom: "2rem",
          paddingLeft: "2.5rem",
          cursor: "pointer",
        }}
      >
        <div
        onClick={handleSelectMovie}
        id="dogs"
          style={{
            width: "20rem",
            height: "25rem",
            padding: "0.50rem",
            opacity: "0.9",
            backgroundImage: `url(${dogs})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        ></div>
        <div
        onClick={handleSelectMovie}
        id="bohemia"
          style={{
            width: "20rem",
            height: "25rem",
            padding: "0.50rem",
            opacity: "0.9",
            backgroundImage: `url(${bohemia})`,
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        ></div>
      </div>

      {modal && <Modal  setModal={setModal} ></Modal>}
    </div>
  );
};

export default MoviesAll;

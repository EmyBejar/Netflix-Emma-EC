import { useState } from "react";
import avangers from "../img/group-3@2x.png";
import killbill from "../img/group-5@2x.png";
import inception from "../img/group-41@2x.png";
import dogs from "../img/group-51@2x.png";
import bohemia from "../img/group-4@2x.png";
import Modal from "./Shared/Modal";

const MoviesAll = ({ setMovieDetail, dataMovie, setDataMovie }) => {
  const movies = ["Avangers", "KillBill", "Inception", "Dogs", "Bohemia"];

  const [modal, setModal] = useState(false);

  const handleSelectMovie = (movieData) => {
    setDataMovie(movieData);
    setMovieDetail(true);
  };

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
          onClick={() =>
            handleSelectMovie({
              title: "Avengers",
              genre: "Action",
              duration: "2h 23m",
              rating: "8.0",
              synopsis: "Description for Avengers movie...",
              backgroundImage: avangers,
            })
          }
          id="avanger"
          value={dataMovie}
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
          onClick={() =>
            handleSelectMovie({
              title: "Kill Bill",
              genre: "Action",
              duration: "2h 11m",
              rating: "8.1",
              synopsis: "Description for Kill Bill movie...",
              backgroundImage: killbill,
            })
          }
          id="killbi"
          value={dataMovie}
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
          onClick={() =>
            handleSelectMovie({
              title: "Inception",
              genre: "Science Fiction",
              duration: "2h 28m",
              rating: "8.8",
              synopsis: "Description for Inception movie...",
              backgroundImage: inception,
            })
          }
          id="inception"
          value={dataMovie}
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
          onClick={() =>
            handleSelectMovie({
              title: "Dogs",
              genre: "Science Fiction",
              duration: "1h 28m",
              rating: "6.8",
              synopsis: "Description for Dogs movie...",
              backgroundImage: dogs,
            })
          }
          id="dogs"
          value={dataMovie}
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
          onClick={() =>
            handleSelectMovie({
              title: "Bohemia",
              genre: "Drama",
              duration: "1h 28m",
              rating: "9.8",
              synopsis: "Description for Bohemia movie...",
              backgroundImage: bohemia,
            })
          }
          id="bohemia"
          value={dataMovie}
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

      {modal && <Modal setModal={setModal}></Modal>}
    </div>
  );
};

export default MoviesAll;

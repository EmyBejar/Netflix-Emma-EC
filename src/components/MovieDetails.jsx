import avangers from "../img/group-3@2x.png";
import CloseBtn from "../img/Close-Button.png";

const MovieDetail = ({ setMovieDetail, dataMovie }) => {
  const hideMovieDetails = () => {
    setTimeout(() => {
      setMovieDetail(false);
    }, 500);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(35, 35, 35)",
        height: "inherit",
        width: "inherit",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "13rem",
          top: "3rem",
          width: "3rem",
          height: "3rem",
          cursor: "pointer",
        }}
      >
        <img src={CloseBtn} alt="close" onClick={hideMovieDetails} />
      </div>

      <form style={{ top: "4rem", color: "#fff", padding: "3rem" }}>
        <div
          id="avanger"
          style={{
            position: "absolute",
            paddingLeft: "1rem",
            display: "flex",
            top: "4rem",
            width: "15rem",
            height: "23rem",
            backgroundImage: `url(${dataMovie.backgroundImage})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            textTransform: "uppercase",
            paddingLeft: "20rem",
            marginLeft: "0rem",
          }}
        >
          <h3
            style={{
              fontSize: "2.5rem",
              letterSpacing: "0.0625rem",
              fontWeight: "300",
            }}
          >
            {dataMovie.title}{" "}
            <span
              style={{
                border: "1px solid #fff",
                borderRadius: "100%",
                padding: "0.25rem",
              }}
            >
              {dataMovie.rating}
            </span>
          </h3>
          <p
            style={{
              textTransform: "capitalize",
              fontSize: "0.875rem",
              marginTop: "-2rem",
            }}
          >
            {dataMovie.genre}
          </p>
          <p
            style={{ color: "#F65261", fontSize: "1.5rem", fontWeight: "300" }}
          >
            {dataMovie.duration}
          </p>
          <p style={{ textTransform: "capitalize" }}>{dataMovie.synopsis}</p>
        </div>
      </form>
    </div>
  );
};

export default MovieDetail;

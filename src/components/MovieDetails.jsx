import avangers from "../img/group-3@2x.png";
import CloseBtn from "../img/Close-Button.png";

const MovieDetail = ({ setMovieDetail, dataMovie }) => {
  const hideMovieDetails = () => {
    setTimeout(() => {
      setMovieDetail(false);
    }, 500);
  };

  return (
    <div className="div-principal-md">
      <div className="div-second-md">
        <img src={CloseBtn} alt="close" onClick={hideMovieDetails} />
      </div>

      <form className="form-md">
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
          <h3 className="title-h3">
            {dataMovie.title}{" "}
            <span className="span-md">{dataMovie.rating}</span>
          </h3>
          <p className="paragraGenre">{dataMovie.genre}</p>
          <p className="paragraDuration">
            {dataMovie.duration}
          </p>
          <p style={{ textTransform: "capitalize" }}>{dataMovie.synopsis}</p>
        </div>
      </form>
    </div>
  );
};

export default MovieDetail;

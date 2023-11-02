import { useState } from "react";
import CloseBtn from "../../img/Close-Button.png";

const MovieForm = ({action, dataMovie, setMovieForm}) => {

  const [formData, setFormData] = useState(dataMovie);

  const hideModal = () => {
    setTimeout(() => {
      setMovieForm(false);
    }, 500);
  };

  const handleChange = (e, key) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const movieInfo = Object.fromEntries(formData);
    onSubmit(movieInfo);
    event.target.reset(); // Reset the form after submission
  };

  return (
    <div className="div-principal-mf">
      <div className="div-sec-mf">
        <img src={CloseBtn} alt="cerrar modal" onClick={hideModal} />
      </div>

      <label className="label-title-mf">{action} MOVIE</label>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}
      >
        {Object.keys(formData).map((key) => (
          <div className="div-content-mf" key={key}>
            <label className="label-form" htmlFor={key}>
              {key}
            </label>
            <input
              className="input"
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={(e) => handleChange(e, key)}
            />
          </div>
        ))}
      </form>
      <div className="div-buttons-form">
        <button type="submit" className="submit-button">
          SUBMIT
        </button>
        <button type="button" className="reset-button">
          RESET
        </button>
      </div>
    </div>
  );
};

export default MovieForm;

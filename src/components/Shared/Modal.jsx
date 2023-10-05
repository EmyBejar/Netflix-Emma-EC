import { useState } from "react";
import CloseBtn from "../../img/Close-Button.png";

const Modal = ({ action, dataMovie, setModal }) => {
  console.log("Action", action);
  const [formData, setFormData] = useState(dataMovie);

  const hideModal = () => {
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleChange = (e, key) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#232323",
        top: "20rem",
        left: "-9rem",
        right: "0",
        color: "#fff",
        width: "61rem",
        height: "20rem",
        marginLeft: "19rem",
        padding: "4rem 3.56rem 0rem 3.75rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "3rem",
          top: "3rem",
          width: "3rem",
          height: "3rem",
          cursor: "pointer",
        }}
      >
        <img src={CloseBtn} alt="cerrar modal" onClick={hideModal} />
      </div>

      <label
        style={{
          fontSize: "2.5rem",
          textTransform: "uppercase",
          fontWeight: "300",
          letterSpacing: "0.0625rem",
        }}
      >
        {action} MOVIE
      </label>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}
      >
        {Object.keys(formData).map((key) => (
          <div
            style={{
              color: "#F65261",
              fontSize: "1rem",
              fontWeight: "600",
              letterSpacing: "0.05556rem",
              textTransform: "uppercase",
              opacity: "0.8",
              marginTop: "0.5rem",
            }}
            key={key}
          >
            <label
              style={{
                display: "flex",
                textAlign: "right",
                width: "8rem",
                marginTop: "0.5rem",
                fontStyle: "normal",
                fontWeight: "500",
              }}
              htmlFor={key}
            >
              {key}
            </label>
            <input
              style={{
                display: "inline-block",
                width: "15.5rem",
                marginBottom: "0rem",
                marginTop: "0.5rem",
                marginRight: "1rem",
                height: "2rem",
                borderRadius: "0.25rem",
                backgroundColor: "rgba(50, 50, 50, 0.95)",
                border: "none",
                color: "#fff",
              }}
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={(e) => handleChange(e, key)}
            />
          </div>
        ))}
      </form>

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          marginTop: "3rem",
          fontSize: "1.25rem",
          gap: "1rem",
        }}
      >
        <button
          type="submit"
          style={{
            border: "1px solid #F65261",
            width: "11rem",
            height: "3.5rem",
            backgroundColor: "#F65261",
            borderRadius: "0.25rem",
          }}
        >
          SUBMIT
        </button>
        <button
          type="button"
          style={{
            width: "11rem",
            height: "3.5rem",
            borderRadius: "0.25rem",
            backgroundColor: "transparent",
            border: "1px solid #fff",
            color: "#fff",
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Modal;

import CloseBtn from "../../img/Close-Button.png";

const MenuMovie = ({ setAction, setMovieForm, setbuttonMenu, setMenu }) => {
  const hideModal = () => {
    setTimeout(() => {
      setMovieForm(false);
      setbuttonMenu(true);
      setMenu(false);
    }, 500);
  };

  const hideEdit = () => {
    setMovieForm(true);
    setMenu(false);
    setbuttonMenu(true);
    setAction("EDIT");
  };

  const handleCancel = () => {
    setMovieForm(true);
    setMenu(false);
    setbuttonMenu(true);
    setAction("DELETE");
  };

  return (
    <div className="div-menu-movie">
      <div className="div-sec-menu-movie">
        <img src={CloseBtn} alt="cerrar modal" onClick={hideModal} />
      </div>
      <ul className="list-movie">
        <li
          style={{ marginTop: "-0.70rem", marginBottom: "1rem" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "red")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
          onClick={hideEdit}
        >
          Edit{" "}
        </li>
        <li
          onMouseEnter={(e) => (e.target.style.backgroundColor = "red")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
          onClick={handleCancel}
        >
          Delete
        </li>
      </ul>
    </div>
  );
};

export default MenuMovie;

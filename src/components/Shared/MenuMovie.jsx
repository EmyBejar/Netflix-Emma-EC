import CloseBtn from "../../img/Close-Button.png";

const MenuMovie = ({ setAction, setModal, setbuttonMenu, setMenu }) => {
  const hideModal = () => {
    setTimeout(() => {
      setModal(false);
      setbuttonMenu(true);
      setMenu(false);
    }, 500);
  };

  const hideEdit = () => {
    setModal(true);
    setMenu(false);
    setbuttonMenu(true);
    setAction("EDIT");
  };

  const handleCancel = () => {
    setModal(true);
    setMenu(false);
    setbuttonMenu(true);
    setAction("DELETE");
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(35, 35, 35, 0.92)",
        borderRadius: "0.25rem",
        width: "10.875rem",
        height: "6.9375rem",
        marginLeft: "7rem",
        marginTop: "0rem",
        padding: "0.85rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          cursor: "pointer",
          padding: "1rem",
        }}
      >
        <img src={CloseBtn} alt="cerrar modal" onClick={hideModal} />
      </div>
      <ul
        style={{
          listStyleType: "none",
          paddingTop: "1rem",
          fontSize: "1rem",
        }}
      >
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

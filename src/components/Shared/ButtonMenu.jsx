import menuMovie from "../../img/group-2.svg";

const ButtonMenu = ({ setbuttonMenu, setMenu, setMovieDetail }) => {
  const openMenu = () => {
    setbuttonMenu(false);
    setMenu(true);
    setMovieDetail(false);
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <button
        style={{
          marginLeft: "17rem",
          width: "3rem",
          height: "3rem",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          backgroundImage: `url(${menuMovie})`,
        }}
        onClick={openMenu}
      >
        ...
      </button>
    </div>
  );
};

export default ButtonMenu;

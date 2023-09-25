import CloseBtn from "../../img/Close-Button.png";

const Modal = ({ setModal }) => {
  const title = "Title";

  const hideModal = () => {
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#232323",
        top: "20rem",
        left: "0",
        right: "0",
        color: "#fff",
        width: "61rem",
        height: "57.3rem",
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
          cursor:"pointer"
        }}
      >
        <img src={CloseBtn} alt="cerrar modal" onClick={hideModal} />
      </div>
      <form>
        <label
          style={{
            fontSize: "2.5",
            textTransform: "uppercase",
            fontWeight: "300",
            letterSpacing: "0.0625rem",
          }}
        >
          {title}
        </label>
      </form>
      <div>
        <button type="button"></button>
      </div>
    </div>
  );
};

export default Modal;

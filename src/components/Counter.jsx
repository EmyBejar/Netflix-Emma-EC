const Counter = ({ count, setCount }) => {
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p
        style={{
          position: "absolute",
          marginLeft: "64rem",
          marginTop: "-20rem",
          color: "#FFF",
        }}
      >
        Value: {count}{" "}
      </p>
      <button
        onClick={handleIncrement}
        style={{
          position: "absolute",
          backgroundColor: "rgba(96, 96, 96, 0.68)",
          color: "#F65261",
          marginTop: "-22rem",
          marginLeft: "70rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        + ADD MOVIE
      </button>
      <button
        onClick={handleDecrement}
        style={{
          position: "absolute",
          marginLeft: "64rem",
          marginTop: "-22.2rem",
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

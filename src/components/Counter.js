import { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  
  /*const handleDecrement = () => {
    setCount(count - 1);
  };
  
  HTML of the Decrement Button

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
  
  */

  return (
    <div>
      <button
        onClick={handleIncrement}
        style={{
          position: "absolute",
          backgroundColor: "rgba(96, 96, 96, 0.68)",
          color: "#F65261",
          marginTop: "-25rem",
          marginLeft: "60rem",
          width:"11.0625rem",
          height: "2.875rem",
          borderRadius: "0.25rem",
          border:"none",
          cursor: "pointer",
        }}
      >
        + ADD MOVIE
      </button>
    </div>
  );
};

export default Counter;

/*
export const Counter = () => {
  return (<h1>Test</h1>);
}*/
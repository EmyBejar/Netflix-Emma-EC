const SortControl = () => {

  return (
    <div
      style={{
        color: "#fff",
        float: "right",
        marginTop: "0rem",
        marginRight: "2.5rem",
      }}
    >
      <form>
        <div>
          <label
            style={{
              marginRight: "1rem",
              opacity: "0.6027",
            }}
          >
            SORT BY
          </label>
          <select
            style={{
              fontSize: "1rem",
              border: "none",
              color: "#fff",
              backgroundColor: "transparent",
              transform:"uppercase"
            }}
          >
            <option value=""> RELEASE DATE </option>
            <option value=""> TITLE </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SortControl;

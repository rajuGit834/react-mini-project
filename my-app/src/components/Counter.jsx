import React, { useState, useEffect } from "react";

const Counter = ({ onCounterLoad }) => {
  useEffect(() => {
    if (onCounterLoad) {
      document.title = "Counter";
      onCounterLoad();
    }
  }, [onCounterLoad]);

  let [currentValue, setCurrentValue] = useState(0);
  let [inputValue, setInputValue] = useState(0);

  const handleInputValue = (event) => {
    setInputValue(Number(event.target.value));
  };

  const calculateCurrentValue = (operationType) => {
    if (operationType === "add") {
      setCurrentValue((prev) => prev + inputValue);
    } else {
      setCurrentValue((prev) => prev - inputValue);
    }
  };

  const resetValues = () => {
    setCurrentValue(0);
    setInputValue(0);
  };

  return (
    <>
      {/* <Navbar title={"Counter"}/> */}
      <div className="container" style={styles.container}>
        <div className="result" style={styles.result}>
          {currentValue}
        </div>
        <div className="buttons" style={styles.buttons}>
          <button
            className="button"
            onClick={() => calculateCurrentValue("sub")}
            type="submit"
            style={styles.button}
          >
            -
          </button>
          <button
            className="button"
            onClick={() => calculateCurrentValue("add")}
            type="submit"
            style={styles.button}
          >
            +
          </button>
        </div>
        <div className="inputGroup" style={styles.inputGroup}>
          <p style={{ fontSize: "18px" }}>Increment/Decrement by</p>
          <input
            type="number"
            value={inputValue}
            className="num"
            onChange={handleInputValue}
          />
        </div>
        <button
          className="resetButton"
          onClick={resetValues}
          style={styles.resetButton}
          type="submit"
        >
          Reset
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    fontSize: "20px",
    marginTop: "40px",
  },
  result: {
    fontSize: "25px",
    fontWeight: 550,
  },
  buttons: {
    display: "flex",
    gap: "15px",
  },
  button: {
    padding: "7px",
    fontSize: "20px",
    cursor: "pointer",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  resetButton: {
    padding: "8px",
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
  },
};

export default Counter;

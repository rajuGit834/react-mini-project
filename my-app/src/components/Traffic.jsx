import React, { useState, useEffect } from "react";

const Traffic = ({ onTrafficLoad }) => {
  let initialValue = 5;
  let [time, setTime] = useState(initialValue);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (onTrafficLoad) {
      document.title = "Traffic Lights";
      onTrafficLoad();
    }
  }, [onTrafficLoad]);

  const tick = () => {
    setTime(time - 1);
    if (time === 1 && index === 0) {
      setTime(3);
      setIndex(1);
    } else if (time === 1 && index === 1) {
      setTime(2);
      setIndex(2);
    } else if (time === 1 && index === 2) {
      setTime(5);
      setIndex(0);
    }
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div
          style={{ background: index === 0 ? "red" : "gray" }}
          className="circle"
        ></div>
        <div
          style={{ background: index === 2 ? "yellow" : "gray" }}
          className="circle"
        ></div>
        <div
          style={{ background: index === 1 ? "green" : "gray" }}
          className="circle"
        ></div>
      </div>
      <h3 style={styles.time}>{time} Seconds</h3>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "350px",
    width: "125px",
    background: "black",
    borderRadius: "20px",
    gap: "20px",
  },
  time: {
    marginTop: "20px",
  },
};

export default Traffic;

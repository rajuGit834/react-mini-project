import React, { useState, useEffect } from "react";

const ShowQuestion = ({
  question,
  count,
  setCount,
  correctAnswer,
  setCorrectAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    console.log("Answer Selected...");
  }, [selectedAnswer, count]);

  const handleClick = () => {
    setCount(count + 1);

    if (
      selectedAnswer.length > 0 &&
      question.answer === question[selectedAnswer]
    ) {
      setCorrectAnswer(correctAnswer + 1);
    }
    setSelectedAnswer("");
  };

  const choosedOption = (option) => {
    setSelectedAnswer(option);
  };

  return (
    <div style={styles.box}>
      <div style={styles.topic}>
        <p>TOPIC:React</p>
        <p>{`${count === 10 ? 1 : 0}${count < 10 ? count : 0}/10`}</p>
      </div>
      <div style={styles.question}>{question.question}</div>
      <div style={styles.options}>
        <div
          onClick={() => choosedOption("option1")}
          style={{
            ...styles.option,
            background: selectedAnswer === "option1" ? "#2C3658" : "#5C87D4",
          }}
        >
          {question.option2}
        </div>
        <div
          onClick={() => choosedOption("option2")}
          style={{
            ...styles.option,
            background: selectedAnswer === "option2" ? "#2C3658" : "#5C87D4",
          }}
        >
          {question.option2}
        </div>
        <div
          onClick={() => choosedOption("option3")}
          style={{
            ...styles.option,
            background: selectedAnswer === "option3" ? "#2C3658" : "#5C87D4",
          }}
        >
          {question.option3}
        </div>
        <div
          onClick={() => choosedOption("option4")}
          style={{
            ...styles.option,
            background: selectedAnswer === "option4" ? "#2C3658" : "#5C87D4",
          }}
        >
          {question.option4}
        </div>
      </div>
      <div style={styles.btnBox}>
        <button
          onClick={handleClick}
          className="quiz-btn"
          style={{
            ...styles.btn,
            background: selectedAnswer.length > 0 ? "#2C3658" : "#5C87D4",
          }}
          type="submit"
          disabled={selectedAnswer.length === 0}
        >
          {count < 10 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
};

// #2C3658
export default ShowQuestion;

const styles = {
  box: {
    height: "500px",
    width: "400px",
    background: "#699CF4",
    borderRadius: "20px",
    boxShadow: "0px -5px 0px 0px Aqua",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "40px",
  },
  topic: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  question: {
    height: "70px",
    width: "100%",
    border: "2px solid Aqua",
    background: "#54B0F4",
    borderRadius: "10px",
    fontSize: "18px",
    paddingTop: "8px",
    paddingLeft: "5px",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  option: {
    height: "50px",
    width: "100%",
    border: "2px solid #32538d",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    paddingTop: "5px",
    paddingLeft: "5px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "40px",
  },
  btn: {
    padding: "8px",
    width: "70px",
    background: "#5C87D4",
    color: "white",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

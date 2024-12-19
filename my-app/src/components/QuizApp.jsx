import React, { useState, useEffect } from "react";
import questions from "../../questions.json";
import ShowQuestion from "./ShowQuestion";
import ShowResult from "./ShowResult";

const QuizApp = ({ onQuizAppLoad }) => {
  const [count, setCount] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  useEffect(() => {
    if (onQuizAppLoad) {
      document.title = "Quiz App";
      onQuizAppLoad();
    }
  }, [onQuizAppLoad]);

  return (
    <div style={styles.top}>
      <div style={styles.main}>
        {count <= 10 && (
          <ShowQuestion
            question={questions[count - 1]}
            count={count}
            setCount={setCount}
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
          />
        )}
        {count > 10 && <ShowResult correctAnswer={correctAnswer} />}
      </div>
    </div>
  );
};
// #2C3658
export default QuizApp;

const styles = {
  top: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    color: "white",
  },
  main: {
    height: "82vh",
    width: "90vw",
    background: "#2C3658",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

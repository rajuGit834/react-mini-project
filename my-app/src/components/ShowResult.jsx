import React from "react";

const ShowResult = ({correctAnswer}) => {
const wrongAnswer = 10 - correctAnswer; 

  return (
    <div style={styles.box}>
      <div style={styles.result}>Results</div>
      <table>
        <colgroup>
          <col style={{ width: "75%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
        <tr>
          <td>Total Questions</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Total Score</td>
          <td>
            {correctAnswer < 10 ? 0 : 1}{correctAnswer === 10 ? 0 : correctAnswer}
          </td>
        </tr>
        <tr>
          <td>Correct Answers</td>
          <td>
          {correctAnswer < 10 ? 0 : 1}{correctAnswer === 10 ? 0 : correctAnswer}
          </td>
        </tr>
        <tr>
          <td>Wrong Answers</td>
          <td>
          {wrongAnswer < 10 ? 0 : 1}{wrongAnswer === 10 ? 0 : wrongAnswer}
          </td>
        </tr>
      </table>
    </div>
  );
};

// #2C3658
export default ShowResult;

const styles = {
  box: {
    height: "400px",
    width: "300px",
    background: "#699CF4",
    borderRadius: "20px",
    boxShadow: "0px -5px 0px 0px Aqua",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "100px",
    textAlign: "center",
    color: "white",
  },

  result: {
    height: "40px",
    width: "100%",
    border: "2px solid Aqua",
    background: "#54B0F4",
    borderRadius: "10px",
    fontSize: "18px",
    paddingTop: "8px",
    paddingLeft: "5px",
  },
};

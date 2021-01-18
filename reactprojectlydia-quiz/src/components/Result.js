import React from "react";

const Result = ({score, playAgain, correctAnswers}) => {

  return <div className="scoreCard">
    <div className="score">You scored {score} / 5 correct answers</div>
    <div>The correct answers were {correctAnswers.join(", ")}</div>
    <button className="playBtn" onClick={playAgain}>Play again!</button>
  </div>
}

export default Result;

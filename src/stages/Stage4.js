import "../css/Stage4.css";
import React from "react";

import logo from "../logo.svg";
function Stage4({ qNo, setQNo, DEFAULT_QUESTION_COUNT, qPoint, setStage }) {
  const handleNextQuestion = () => {
    setQNo(qNo + 1);
    setStage(2); // to questions page
  };

  return (
    <div className="page">
      <div className="top-container">
        <span className="top-child">
          <span className="col-primary">{qNo + 1} </span>/
          {DEFAULT_QUESTION_COUNT}
        </span>
        <img className="top-child icon-st2" src={logo} alt="logo" />
      </div>
      <div className=" correct-container">
        <span className="correct-text animate__animated animate__bounce col-green">
          CORRECT !
        </span>
        <span className="earned-text animate__animated animate__bounce">
          You have earned <span className="col-green">{qPoint}</span> points
        </span>
        <span className="earned-text animate__animated animate__bounce">
          Total : {qPoint * (qNo + 1)} points
        </span>
        <button
          className="correct-answer-btn"
          onClick={() => {
            handleNextQuestion();
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

export default Stage4;

import "../css/Stage4.css";
import React, { useState, useEffect } from "react";

import logo from "../logo.svg";
function Stage4({ qNo, setQNo, DEFAULT_QUESTION_COUNT, qPoint, setStage }) {
  const handleNextQuestion = () => {
    setQNo(qNo + 1);
    setStage(2); // to questions page
  };

  return (
    <div class="page">
      <div class="top-container">
        <span class="top-child">
          <span className="col-primary">{qNo + 1} </span>/
          {DEFAULT_QUESTION_COUNT}
        </span>
        <img class="top-child icon-st2" src={logo} alt="logo" />
      </div>
      <div class=" correct-container">
        <span class="correct-text animate__animated animate__bounce col-green">
          CORRECT !
        </span>
        <span class="earned-text animate__animated animate__bounce">
          You have earned <span class="col-green">{qPoint}</span> points
        </span>
        <span class="earned-text animate__animated animate__bounce">
          Total : {qPoint * (qNo + 1)} points
        </span>
        <button
          class="correct-answer-btn"
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

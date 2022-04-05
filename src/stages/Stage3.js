import "../css/Stage3.css";
import React, { useState, useEffect } from "react";

import logo from "../logo.svg";
function Stage3({ qNo, DEFAULT_QUESTION_COUNT, qPoint, setStage }) {
  const handleRestart = () => {
    setStage(1); // to welcome page
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
        <span class="correct-text animate__animated animate__bounce col-red">
          WRONG !
        </span>
        <span class="earned-text animate__animated animate__bounce">
          You earned <span class="col-red">{qPoint * qNo}</span> points.. You
          can start again if you want.
        </span>
        <button
          onClick={() => {
            handleRestart();
          }}
          class="correct-answer-btn"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default Stage3;

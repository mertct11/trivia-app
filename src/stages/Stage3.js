import "../css/Stage3.css";
import React from "react";
import "animate.css";
import logo from "../logo.svg";
function Stage3({ qNo, DEFAULT_QUESTION_COUNT, qPoint, setStage }) {
  const handleRestart = () => {
    setStage(1); // to welcome page
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
        <span className="correct-text animate__animated animate__bounce col-red">
          WRONG !
        </span>
        <span className="earned-text animate__animated animate__bounce">
          You earned <span className="col-red">{qPoint * qNo}</span> points..
          You can start again if you want.
        </span>
        <button
          onClick={() => {
            handleRestart();
          }}
          className="correct-answer-btn"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default Stage3;

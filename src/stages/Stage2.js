import "../css/Stage2.css";
import React, { useState, useEffect } from "react";
function Stage2({
  questions,
  qNo,
  setQNo,
  DEFAULT_QUESTION_COUNT,
  qPoint,
  setStage,
}) {
  const [leftTime, setLeftTime] = useState(15);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    let myInterval = setInterval(() => {
      setLeftTime(leftTime - 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    prepareAnswers();
  }, [qNo]);

  useEffect(() => {
    if (leftTime <= 0) {
      setStage(3); // to wrong page
    }
  }, [leftTime]);

  const prepareAnswers = () => {
    const answersArr = [];
    answersArr.push(questions[qNo]?.correct_answer);
    const shuffledAnswersArr = answersArr
      .concat(questions[qNo]?.incorrect_answers)
      .sort((a, b) => 0.5 - Math.random());

    console.log({ shuffledAnswersArr });

    setAnswers(shuffledAnswersArr);
  };

  const handleChoosingAnswer = (a) => {
    if (questions[qNo]?.correct_answer == a) {
      setStage(4); // to success page

      console.log("true");
    } else {
      console.log("false");
      setStage(3); // to wrong page
    }
  };
  return (
    <div className="page">
      <div className="top-container">
        <span className="top-child">
          <span className="col-primary">{qNo + 1}</span> /
          {DEFAULT_QUESTION_COUNT}
        </span>
        <span className="top-child col-primary">{qPoint} POINT</span>
        <span className="top-child">
          Remaining Time: 00:<span className="col-red">{leftTime}</span>
        </span>
      </div>
      {questions[qNo]?.correct_answer}
      <div className=" question-container">
        <span className="question-text">{questions[qNo]?.question}</span>

        {answers?.map((a, key) => {
          return (
            <button
              key={key}
              className="question-answer-btn"
              onClick={() => {
                handleChoosingAnswer(a);
              }}
            >
              {a}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Stage2;

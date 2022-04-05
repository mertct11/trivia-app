import logo from "./logo.svg";
import "./css/App.css";
import { Stage1, Stage2, Stage3, Stage4 } from "./stages/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getQuestions } from "./actions";

import React, { useState, useEffect } from "react";
import difficulties from "./utils/difficulties";
const DEFAULT_QUESTION_COUNT = 10; // 10 question default
const DEFAULT_QUESTION_TYPE = "multiple"; // 10 question default
const EASY_POINT = 100;
const MED_POINT = 200;
const HARD_POINT = 300;

function App() {
  const [stage, setStage] = useState(1);
  const [difficulty, setDifficulty] = useState(difficulties[0]); // default value "easy"
  const [qPoint, setQPoint] = useState(100); // DEFAULT easy choosen
  const [qNo, setQNo] = useState(0); // DEFAULT easy choosen
  const [choosedCategories, setChoosedCategories] = useState([]);
  const [error, setError] = useState(false);
  const { allCategories, questions } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allCategories) {
      dispatch(getAllCategories());
    }
  }, []);

  useEffect(() => {
    if (questions?.length > 0) {
      setStage(2);
    }
  }, [questions]);

  useEffect(() => {
    if (difficulty == "easy") {
      setQPoint(EASY_POINT);
    }
    if (difficulty == "medium") {
      setQPoint(MED_POINT);
    }
    if (difficulty == "hard") {
      setQPoint(HARD_POINT);
    }
  }, [difficulty]);

  const handleGetStarted = () => {
    if (difficulty && choosedCategories?.length > 0) {
      setQNo(0);
      setChoosedCategories([]);
      dispatch(
        getQuestions(
          {
            dificulty: difficulty,
            amount: DEFAULT_QUESTION_COUNT,
            type: DEFAULT_QUESTION_TYPE,
          },
          choosedCategories
        )
      );
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3500);
    }
  };

  return (
    <div className="App">
      {stage == 1 && (
        <Stage1
          handleGetStarted={handleGetStarted}
          difficulties={difficulties}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setChoosedCategories={setChoosedCategories}
          error={error}
          allCategories={allCategories}
        />
      )}
      {stage == 2 && (
        <Stage2
          questions={questions}
          qNo={qNo}
          setQNo={setQNo}
          DEFAULT_QUESTION_COUNT={DEFAULT_QUESTION_COUNT}
          qPoint={qPoint}
          setStage={setStage}
        />
      )}
      {stage == 3 && (
        <Stage3
          qNo={qNo}
          setStage={setStage}
          qPoint={qPoint}
          DEFAULT_QUESTION_COUNT={DEFAULT_QUESTION_COUNT}
        />
      )}
      {stage == 4 && (
        <Stage4
          qNo={qNo}
          setQNo={setQNo}
          setStage={setStage}
          qPoint={qPoint}
          DEFAULT_QUESTION_COUNT={DEFAULT_QUESTION_COUNT}
        />
      )}
    </div>
  );
}

export default App;

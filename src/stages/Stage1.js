import "../css/Stage1.css";
import React, { useState, useEffect } from "react";
import logo from "../logo.svg";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function Stage1({
  handleGetStarted,
  difficulties,
  difficulty,
  setDifficulty,
  setChoosedCategories,
  error,
  allCategories,
}) {
  const categories = allCategories?.map((d) => ({
    value: d.id,
    label: d.name,
  }));
  const CustomStyle = {
    valueContainer: (base, state) => ({
      ...base,

      overflowX: "hidden",
      overflowY: "auto",
      height: "100px",
    }),
  };
  return (
    <div className="page">
      <div className="icon-container">
        <img src={logo} className="icon" alt="logo" />
      </div>
      <div className="title-container">
        <span className="title">TRIVIA APP</span>
      </div>
      <div className="settings-container">
        <div className="settings-sub-container">
          {difficulties?.map((i, key) => {
            return (
              <div
                className="difficulty-input-container"
                key={key}
                onClick={(e) => {
                  setDifficulty(difficulties[key]);
                }}
              >
                <input
                  type="radio"
                  value={i}
                  checked={difficulty == difficulties[key] ? true : false}
                />
                <label>{i}</label>
              </div>
            );
          })}
        </div>
        <div className="settings-line "></div>
        <div className="settings-sub-container">
          <div className="settings-category-select">
            <Select
              closeMenuOnSelect={true}
              components={animatedComponents}
              isMulti
              options={categories}
              styles={CustomStyle}
              onChange={(e) => {
                setChoosedCategories(e);
              }}
            />
          </div>
        </div>
      </div>
      <div className="get-started-container">
        <button
          className="get-started-btn"
          onClick={() => {
            handleGetStarted();
          }}
        >
          GET STARTED
        </button>
      </div>
      {error && (
        <div className="error-container">
          <span className="error">
            Be sure choosed category and difficulty!
          </span>
        </div>
      )}
    </div>
  );
}

export default Stage1;

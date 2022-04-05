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
    <div class="page">
      <div class="icon-container">
        <img src={logo} class="icon" alt="logo" />
      </div>
      <div class="title-container">
        <span class="title">TRIVIA APP</span>
      </div>
      <div class="settings-container">
        <div class="settings-sub-container">
          {difficulties?.map((i, key) => {
            return (
              <div
                class="difficulty-input-container"
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
        <div class="settings-line "></div>
        <div class="settings-sub-container">
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
      <div class="get-started-container">
        <button
          class="get-started-btn"
          onClick={() => {
            handleGetStarted();
          }}
        >
          GET STARTED
        </button>
      </div>
      {error && (
        <div class="error-container">
          <span class="error">Be sure choosed category and difficulty!</span>
        </div>
      )}
    </div>
  );
}

export default Stage1;

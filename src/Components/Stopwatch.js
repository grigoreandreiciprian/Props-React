import React from "react";

const Stopwatch = ({ stopwatch }) => {
  return (
    <div class="stopwatch">
      <h1>{stopwatch}</h1>
      <p>0</p>
      <div class="buttons">
        <button class="btn start" onClick={() => stopwatch()}>
          Start
        </button>
        <button class="btn reset" onClick={stopwatch}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

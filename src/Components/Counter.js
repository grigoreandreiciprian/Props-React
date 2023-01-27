import React from "react";
import { useState, useEffect } from "react";

const Counter = ({ score, player }) => {
  let [index, setIndex] = useState(0);

  return (
    <div class="counter">
      <button
        class="gray reduce"
        onClick={() => {
          if (index > 0) {
            setIndex((prevIndex) => prevIndex - 1);
            score(player.id, player.score - 1);
          }
        }}
      >
        -
      </button>
      <p>{index}</p>
      <button
        class="gray add"
        onClick={() => {
          score(player.id, player.score + 1);
          setIndex((prevIndex) => prevIndex + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

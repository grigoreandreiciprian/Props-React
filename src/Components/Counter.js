import React from "react";
import { useState, useEffect } from "react";

const Counter = ({ player, handleScore }) => {
  let [score, setScore] = useState(player.score);

  const increaseScore = () => {
    const newScore = score + 1;
    setScore(newScore);
  };

  const decreaseScore = () => {
    if (score > 0) {
      const newScore = score - 1;
      setScore(newScore);
    }
  };

  useEffect(() => {
    handleScore(player.id, score);
  }, [score]);

  return (
    <div className="counter">
      <button className="gray reduce" onClick={decreaseScore}>
        -
      </button>
      <p>{score}</p>
      <button className="gray add" onClick={increaseScore}>
        +
      </button>
    </div>
  );
};

export default Counter;

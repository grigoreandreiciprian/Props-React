import React, { useEffect } from "react";
import { useState } from "react";
const Header = ({ players }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [randomPlayer, setRandomPlayer] = useState("");

  const getRandomPlayer = () => {
    const randomObject = players[Math.floor(Math.random() * players.length)];

    setRandomPlayer(randomObject);
  };

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <header>
      <button onClick={getRandomPlayer}>test</button>
      <div className="score">
        <p>Total players:</p>
        <p>Total points:</p>
      </div>
      <h1>SCOREBOARD</h1>
      <div className="stopwatch">
        <h1>STOPWACH</h1>
        <p>{time}</p>
        <div className="buttons">
          {(() => {
            if (isActive && isPaused === false) {
              return (
                <button className="btn start" onClick={handlePauseResume}>
                  Stop
                </button>
              );
            } else {
              return (
                <button className="btn start" onClick={handleStart}>
                  Start
                </button>
              );
            }
          })()}
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

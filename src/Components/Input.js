import React from "react";

import { useState, useEffect } from "react";

const Input = ({ add, handleChanger }) => {
  const [playerName, setPlayerName] = useState("");

  const handleAdd = (e) => {
    let obj = e.target;

    if (obj.classList.contains("player")) {
      setPlayerName(obj.value);
    }
  };

  useEffect(() => {
    handleChanger(playerName);
  }, [playerName]);

  return (
    <div class="input">
      <input
        type="text"
        className="player"
        placeholder="ENTER A PLAYER NAME"
        onChange={handleAdd}
      ></input>
      <button
        class="btn playerAdd"
        onClick={() => {
          add();
        }}
      >
        Add player
      </button>
    </div>
  );
};

export default Input;

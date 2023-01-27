import React, { useEffect } from "react";

import Counter from "./Counter";

const Player = ({ player, score, remove }) => {
  return (
    <div class="playerBox">
      <div class="player">
        <i
          class="fa-solid fa-x cross"
          onClick={() => {
            remove(player.id);
          }}
        ></i>
        <i class="fa-solid fa-crown crown"></i>
        <p>{player.name}</p>
      </div>

      <Counter score={score} player={player} />
    </div>
  );
};

export default Player;

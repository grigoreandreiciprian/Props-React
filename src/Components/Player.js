import React from "react";
import Counter from "./Counter";

const Player = ({ player, remove, handleScore }) => {
  return (
    <div className="playerBox">
      <div className="player">
        <i
          className="fa-solid fa-x cross"
          onClick={() => {
            remove(player.id);
          }}
        ></i>
        <i className="fa-solid fa-crown crown"></i>
        <p>{player.name}</p>
      </div>

      <Counter player={player} handleScore={handleScore} />
    </div>
  );
};

export default Player;

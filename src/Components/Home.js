import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import Player from "./Player";
import Input from "./Input";

const Home = () => {
  let [players, setPlayers] = useState([
    {
      id: 1,
      score: 0,
      name: "Paul",
    },

    {
      id: 2,
      score: 0,
      name: "Jhonny",
    },

    {
      id: 3,
      score: 0,
      name: "Depp",
    },

    {
      id: 4,
      score: 0,
      name: "Maria",
    },

    {
      id: 5,
      score: 0,
      name: "Arthur",
    },
  ]);

  let [playerName, setPlayerName] = useState("");
  let [curentPlayer, setCurentPlayer] = useState("");
  let [score, setScore] = useState("");

  console.log(curentPlayer);
  console.log(score);
  const scores = players.map((e) => e.score);

  const handleChanger = (playerName) => {
    setPlayerName(playerName);
  };

  const handleScore = (curentPlayer, score) => {
    setCurentPlayer(curentPlayer);
    setScore(score);
  };
  const randomIds = () => {
    let ids = players.map((e) => e.id);
    let id = Math.floor(Math.random() * 100) + 1;
    while (ids.includes(id) == true) {
      id = Math.floor(Math.random() * 100) + 1;
    }
    return id;
  };

  const add = () => {
    let newPlayers = players.map((e) => e);

    let newPlayer = {
      id: randomIds(),
      score: 0,
      name: playerName,
    };

    newPlayers.push(newPlayer);

    setPlayers(newPlayers);
  };

  const remove = (id) => {
    let newPlayers = players.filter((e) => e.id != id);

    setPlayers(newPlayers);
  };

  return (
    <>
      <Header players={players} />
      <main>
        {players.map((e) => {
          return (
            <Player
              key={e.id}
              player={e}
              remove={remove}
              handleScore={handleScore}
            />
          );
        })}

        <Input handleChanger={handleChanger} add={add} />
      </main>
    </>
  );
};

export default Home;

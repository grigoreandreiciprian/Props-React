import { useEffect, useState } from "react";

import Header from "./Header";

import Player from "./Player";

import Input from "./Input";

function App() {
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

  const [playerName, setPlayerName] = useState("");

  const scores = players.map((e) => e.score);

  const randomIds = () => {
    let ids = players.map((e) => e.id);
    let id = Math.floor(Math.random() * 100) + 1;
    while (ids.includes(id) == true) {
      id = Math.floor(Math.random() * 100) + 1;
    }
    return id;
  };

  const totalScore = (id, score) => {
    let prevPlayers = players.filter((e) => e.id != id);
    let curentPlayer = players.filter((e) => e.id == id)[0];
    curentPlayer.score = +score;

    prevPlayers.unshift(curentPlayer);

    setPlayers(prevPlayers);
  };

  const handleChanger = (playerName) => {
    setPlayerName(playerName);
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
      <Header players={players} title="Scoreboard" stopwatch="stopwach" />

      <main>
        {players.map((e) => {
          return <Player player={e} score={totalScore} remove={remove} />;
        })}

        <Input add={add} handleChanger={handleChanger} />
      </main>
    </>
  );
}

export default App;

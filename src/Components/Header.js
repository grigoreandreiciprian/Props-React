import React from "react";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = ({ players, title, stopwatch }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch stopwatch={stopwatch} />
    </header>
  );
};

export default Header;

"use client";
import React, { useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import TeamsWrapper from "./TeamsWrapper";

/* type Team = {
  name: string;
  players: string[];
  isReady: boolean;
  teams: Team[];
}; */

const Home: React.FC = () => {
  const [playerSelected, setPlayerSelected] = useState<string>("");

  return (
    <div id="home-page">
      <div id="home-page-wrapper" className="flex">
        <SideBar
          playerSelected={playerSelected}
          setPlayerSelected={setPlayerSelected}
        />
        <TeamsWrapper
          setPlayerSelected={setPlayerSelected}
          playerSelected={playerSelected}
        />
      </div>
    </div>
  );
};

export default Home;

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
  const [removePlayersFromTeam, setRemovePlayersFromTeam] = useState<string[]>(
    []
  );

  return (
    <div id="home-page">
      <div id="home-page-wrapper" className="flex max-h-screen">
        <SideBar
          playerSelected={playerSelected}
          setPlayerSelected={setPlayerSelected}
          removePlayersFromTeam={removePlayersFromTeam}
        />
        <TeamsWrapper
          setPlayerSelected={setPlayerSelected}
          playerSelected={playerSelected}
          setRemovePlayersFromTeam={setRemovePlayersFromTeam}
        />
      </div>
    </div>
  );
};

export default Home;

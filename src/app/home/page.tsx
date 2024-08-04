"use client";
import React, { useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import TeamsWrapper from "./TeamsWrapper";
import MobileWidget from "@/components/MobileWidget/MobileWidget";

const Home: React.FC = () => {
  const [playerSelected, setPlayerSelected] = useState<string>("");
  const [removePlayersFromTeam, setRemovePlayersFromTeam] = useState<string[]>(
    []
  );
  const [isSideBarShow, setIsSideBarShow] = useState<boolean>(false);

  return (
    <div
      id="home-page"
      className="h-[100%] overflow-scroll md:overflow-hidden md:max-h-screen"
    >
      <div id="home-page-wrapper" className="flex">
        <SideBar
          playerSelected={playerSelected}
          setPlayerSelected={setPlayerSelected}
          removePlayersFromTeam={removePlayersFromTeam}
          setIsSideBarShow={setIsSideBarShow}
          isSideBarShow={isSideBarShow}
        />
        <TeamsWrapper
          setPlayerSelected={setPlayerSelected}
          playerSelected={playerSelected}
          setRemovePlayersFromTeam={setRemovePlayersFromTeam}
        />
        <MobileWidget setIsSideBarShow={setIsSideBarShow} isSideBarShow={isSideBarShow}/>
      </div>
    </div>
  );
};

export default Home;

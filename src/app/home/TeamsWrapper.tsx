import React from "react";
import PlayerTeamBox from "./components/playerTeamBox/PlayerTeamBox";

type Props = {};

const TeamsWrapper = (props: Props) => {
  return (
    <div
      id="teams-wrapper"
      className="w-[100%] flex items-center justify-center  h-screen bg-center bg-cover bg-home-background"
    >
      <div className="flex items-center justify-center w-full h-screen max-h-screen border-black">
        <PlayerTeamBox title={"Local"} />
        <PlayerTeamBox title={"Visitante"} />
      </div>
    </div>
  );
};

export default TeamsWrapper;

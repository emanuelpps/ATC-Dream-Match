import React, { useState } from "react";
import PlayerTeamBox from "./components/playerTeamBox/PlayerTeamBox";
import PlayerSelect from "./components/playerSelect/PlayerSelect";

type PlayerWrapperProps = {
  playerSelected: string;
  setPlayerSelected: (player_name: string) => void;
  setRemovePlayersFromTeam: (players: string[]) => void;
};


const TeamsWrapper = ({
  playerSelected,
  setPlayerSelected,
  setRemovePlayersFromTeam,
}: PlayerWrapperProps) => {
  const [localTeam, setLocalTeam] = useState<string[]>([]);
  const [visitorTeam, setVisitorTeam] = useState<string[]>([]);
  const [localTeamTitle, setLocalTeamTitle] = useState<string>("Local");
  const [visitorTeamTitle, setVisitorTeamTitle] = useState<string>("Visitante");
  const [isTeamReady, setIsTeamReady] = useState<{ [key: string]: boolean }>({
    localTeam: false,
    visitorTeam: false,
  });

  return (
    <div
      id="teams-wrapper"
      className="w-[100%] min-h-[100%] flex flex-col items-center justify-center md:h-screen bg-center bg-cover bg-mobile-background md:bg-home-background"
    >
      <PlayerSelect playerSelected={playerSelected} />
      <div className="flex flex-col items-center justify-center w-full border-black md:h-screen md:max-h-screen md:flex-row">
        <PlayerTeamBox
          title={localTeamTitle}
          team={localTeam}
          setTeams={setLocalTeam}
          playerSelected={playerSelected}
          setPlayerSelected={setPlayerSelected}
          setTeamTitle={setLocalTeamTitle}
          setIsTeamReady={(ready: boolean) =>
            setIsTeamReady({ ...isTeamReady, localTeam: ready })
          }
          isTeamReady={isTeamReady.localTeam}
          setRemovePlayersFromTeam={setRemovePlayersFromTeam}
        />
        <PlayerTeamBox
          title={visitorTeamTitle}
          team={visitorTeam}
          setTeams={setVisitorTeam}
          playerSelected={playerSelected}
          setPlayerSelected={setPlayerSelected}
          setTeamTitle={setVisitorTeamTitle}
          setIsTeamReady={(ready: boolean) =>
            setIsTeamReady({ ...isTeamReady, visitorTeam: ready })
          }
          isTeamReady={isTeamReady.visitorTeam}
          setRemovePlayersFromTeam={setRemovePlayersFromTeam}
        />
      </div>
    </div>
  );
};

export default TeamsWrapper;

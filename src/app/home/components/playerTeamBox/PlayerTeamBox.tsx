import Buttons from "@/components/Buttons/Buttons";
import React, { useEffect, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

type PlayerTeamBoxProps = {
  title: string;
  team: string[];
  setTeams: (team: string[]) => void;
  playerSelected: string;
  setPlayerSelected: (player_name: string) => void;
  setTeamTitle: (title: string) => void;
  isTeamReady: boolean;
  setIsTeamReady: (ready: boolean) => void;
  setRemovePlayersFromTeam: (players: string[]) => void;
};

const PlayerTeamBox = ({
  title,
  team,
  setTeams,
  playerSelected,
  setPlayerSelected,
  setTeamTitle,
  isTeamReady,
  setIsTeamReady,
  setRemovePlayersFromTeam,
}: PlayerTeamBoxProps) => {
  const [isTeamLengthReady, setIsTeamLengthReady] = useState<boolean>(false);
  const [prevTitle, setPrevTitle] = useState<string>(title);

  useEffect(() => {
    //setPrevTitle(title);
    if (team.length >= 5) {
      setIsTeamLengthReady(true);
    } else {
      setIsTeamLengthReady(false);
    }
  }, [team.length]);

  const handleDeleteTeam = () => {
    setRemovePlayersFromTeam(team);
    setTeams([]);
    setTeamTitle(prevTitle);
    setIsTeamReady(false);
  };

  return (
    <div
      id="player-team-box"
      className="w-[100%] flex justify-center items-center"
    >
      <div
        id="player-team-box-wrapper"
        className="flex flex-col items-center justify-center gap-5"
      >
        <div
          id="player-team-box-title"
          className="flex flex-col items-center justify-center mb-10"
        >
          <span className="text-sm font-bold text-white [text-shadow:_7px_5px_7px_rgba(0,0,0,0.56)]">
            Nombre del equipo:
          </span>
          <span className="text-5xl font-bold text-white [text-shadow:_7px_5px_7px_rgba(0,0,0,0.56)]">
            {title}
          </span>
          <div>
            {isTeamLengthReady && !isTeamReady ? (
              <input
                type="text"
                value={title}
                placeholder="agregar nuevo equipo"
                onChange={(e) => setTeamTitle(e.target.value)}
                className="text-xl font-bold text-white rounded-md bg-[#b7c4ad] border-2 border-black w-[300px] h-[50px] max-h-[50px]"
              />
            ) : null}
          </div>
        </div>
        <div>
          {!isTeamLengthReady ? (
            <Buttons
              label={`Agregar Jugador a equipo ${title}`}
              onClick={() => {
                if (!isTeamLengthReady) {
                  setTeams([...team, playerSelected]), setPlayerSelected("");
                }
              }}
              variant={"tertiary"}
            />
          ) : isTeamLengthReady && !isTeamReady ? (
            <Buttons
              label="Equipo Listo!"
              onClick={() => setIsTeamReady(true)}
              variant={"tertiary"}
            />
          ) : isTeamLengthReady && isTeamReady ? (
            <Buttons
              label="Eliminar equipo"
              onClick={handleDeleteTeam}
              variant={"tertiary"}
            />
          ) : null}
        </div>
        <div
          id="player-team-box-players"
          className={`${
            isTeamLengthReady
              ? "bg-transparent text-white font-semibold border-none"
              : "bg-[#b7c4ad] "
          }  border-2 border-black w-[300px] h-[300px] max-h-[300px] rounded-lg`}
        >
          {team.map((player) => (
            <div
              key={player}
              className={`${
                isTeamLengthReady
                  ? "text-2xl font-bold text-white [text-shadow:_7px_5px_7px_rgba(0,0,0,0.56)]"
                  : "border-b-2 border-black"
              } flex items-center justify-between w-full p-3 `}
            >
              <span>{player}</span>
              {isTeamLengthReady ? (
                <div></div>
              ) : (
                <AiFillCloseSquare
                  className="text-red-800 cursor-pointer"
                  onClick={() => setTeams(team.filter((t) => t !== player))}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerTeamBox;

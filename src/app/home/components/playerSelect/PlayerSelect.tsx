import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";

type Props = {
  playerSelected: string;
  setRemovePlayersFromTeam: (players: string[]) => void;
  setPlayerSelected: (player_name: string) => void;
};

const PlayerSelect: React.FC<Props> = ({
  playerSelected,
  setRemovePlayersFromTeam,
  setPlayerSelected,
}) => {
  return (
    <div
      id="player-select"
      className="flex items-center justify-center w-full min-h-[100px] h-[100px] mt-2"
    >
      {playerSelected && (
        <div
          id="player-select-wrapper"
          className="flex w-[300px] min-w-[300px] flex-col items-center justify-center p-2 bg-[#B7C4AD] border-2 border-black rounded-lg"
        >
          <div
            onClick={() => {
              setRemovePlayersFromTeam([playerSelected]), setPlayerSelected("");
            }}
            className="flex justify-end items-end w-full"
          >
            <AiFillCloseSquare className="" />
          </div>
          <span className="md:text-1xl">Jugador Elegido:</span>
          <span className="md:text-3xl">{playerSelected}</span>
        </div>
      )}
    </div>
  );
};

export default PlayerSelect;

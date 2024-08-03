import React from "react";

type PlayerProps = {
  playerSelected: string;
};

const PlayerSelect = ({ playerSelected }: PlayerProps) => {
  return (
    <div
      id="player-select"
      className="flex items-center justify-center w-full min-h-[100px] h-[100px] mt-2"
    >
      {playerSelected && (
        <div
          id="player-select-wrapper"
          className="flex w-[300px] min-w-[300px] flex-col items-center justify-center p-5 bg-[#B7C4AD] border-2 border-black rounded-lg"
        >
          <span className="text-1xl">Jugador Elegido:</span>
          <span className="text-3xl">{playerSelected}</span>
        </div>
      )}
    </div>
  );
};

export default PlayerSelect;

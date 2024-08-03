import Buttons from "@/components/Buttons/Buttons";
import React from "react";

type Props = {
  title: string;
};

const PlayerTeamBox = (props: Props) => {
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
          className="mb-10 text-5xl font-bold text-white [text-shadow:_7px_5px_7px_rgba(0,0,0,0.56)]"
        >
          {props.title}
        </div>
        <div>
          <Buttons
            label={`Agregar Jugador a equipo ${props.title}`}
            onClick={() => {}}
            variant={"tertiary"}
          ></Buttons>
        </div>
        <div
          id="player-team-box-players"
          className="bg-white border-2 border-black w-[300px] h-[300px]"
        ></div>
      </div>
    </div>
  );
};

export default PlayerTeamBox;

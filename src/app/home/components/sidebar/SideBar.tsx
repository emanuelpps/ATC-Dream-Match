"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { GetPlayers } from "../../../../services/GetPlayers";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import noAvatar from "../../../../../public/assets/images/noAvatar.png";

type AllPlayers = {
  name: string;
  player_image: string;
  player_name: string;
  team_key: string;
  team_name: string;
};

type PlayersToRemove = {
  removePlayersFromTeam: string[];
};

type PlayerSelected = {
  playerSelected: string;
  setPlayerSelected: (player_name: string) => void;
};

type SideBarProps = {
  isSideBarShow: boolean;
  setIsSideBarShow: (isShow: boolean) => void;
};

const SideBar = ({
  playerSelected,
  setPlayerSelected,
  removePlayersFromTeam,
  isSideBarShow,
  setIsSideBarShow,
}: PlayerSelected & PlayersToRemove & SideBarProps) => {
  const [allPlayers, setAllPlayers] = useState<AllPlayers[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const players = await GetPlayers();
        setAllPlayers(players || []);
      } catch (error) {
        console.error("Error al cargar jugadores", error);
      }
    };

    fetchPlayers();
  }, []);

  const addPlayerHandler = (playerName: string) => {
    setPlayerSelected(playerName);
    setSelectedPlayers((prevSelectedPlayers) => [
      ...prevSelectedPlayers,
      playerName,
    ]);
  };

  useEffect(() => {
    if (removePlayersFromTeam.length > 0) {
      setSelectedPlayers((prevSelectedPlayers) =>
        prevSelectedPlayers.filter(
          (player) => !removePlayersFromTeam.includes(player)
        )
      );
    }
  }, [removePlayersFromTeam]);

  const filteredPlayers = allPlayers.filter(
    (player) => !selectedPlayers.includes(player.player_name)
  );

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = noAvatar.src;
  };
  return (
    <div id="side-bar" className={`${isSideBarShow ? "block absolute" : "hidden"} md:relative w-[100%] md:w-[20%] md:flex`}>
      <div
        id="side-bar-wrapper"
        className="w-full h-screen md:max-h-screen overflow-y-auto border-2 border-black bg-[#666d61]"
      >
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <div
              key={player.team_key}
              className="w-full h-[100px] flex items-center justify-center border-2 border-black cursor-pointer"
              onClick={() => {addPlayerHandler(player.player_name), setIsSideBarShow(false)}}
            >
              <div className="flex justify-center items-center w-[100%]">
                <img
                  src={player.player_image || noAvatar.src}
                  onError={handleImageError}
                  width={50}
                  height={50}
                  alt={""}
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-start w-[100%]">
                <span>{player.player_name}</span>
              </div>
            </div>
          ))
        ) : (
          <div>Cargando Jugadores...</div>
        )}
      </div>
    </div>
  );
};

export default SideBar;

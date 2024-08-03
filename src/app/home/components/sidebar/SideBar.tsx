"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { GetPlayers } from "../../../../services/GetPlayers";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import noAvatar from "../../../../../public/assets/images/noAvatar.png";

type Player = {
    player_key: string;
    player_name: string;
    player_image: string;
    player_age: string;
};

type AllPlayers = {
    player_image: string | StaticImport;
    player_name: ReactNode;
    team_key: string;
    team_name: string;
    players: Player[];
};

type Props = {};

const SideBar = (props: Props) => {
    const [allPlayers, setAllPlayers] = useState<AllPlayers[] | null>(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const players = await GetPlayers();
                setAllPlayers(players || []);
            } catch (error) {
                console.error("Failed to fetch players:", error);
            }
        };

        fetchPlayers();
    }, []);

    console.log("ALL", allPlayers);

    return (
        <div id="side-bar" className="w-[20%]">
            <div
                id="side-bar-wrapper"
                className="w-full h-screen max-h-screen overflow-y-auto border-2 border-black bg-[#666d61]"
            >
                {allPlayers ? (
                    allPlayers.map((player) => (
                        <div
                            key={player.team_key}
                            className="w-full h-[100px] flex items-center justify-center border-2 border-black"
                        >
                            <div className="flex justify-center items-center w-[100%]">

                                <Image
                                    src={player.player_image || noAvatar}
                                    width={50}
                                    height={50}
                                    alt={""}
                                    className="rounded-full "
                                />
                            </div>
                            <div className="flex justify-start w-[100%]">
                                <span>{player.player_name}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default SideBar;

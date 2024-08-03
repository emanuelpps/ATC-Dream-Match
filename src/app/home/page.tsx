'use client'
import React, { useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import TeamsWrapper from "./TeamsWrapper";

type Team = {
    name: string;
    players: string[];
    isReady: boolean; 
    teams: Team[];
};

const Home: React.FC = () => {
    const [teams, setTeams] = useState([
        {
            name: "Team 1",
            players: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
            isReady: false
        },
        {
            name: "Team 2",
            players: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
            isReady: false
        }
    ]);

    return (
        <div id="home-page">
            <div id="home-page-wrapper" className="flex">
                <SideBar />
                <TeamsWrapper teams={teams} setTeams={setTeams} />
            </div>
        </div>
    );
};


export default Home;


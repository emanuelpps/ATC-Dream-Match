"use client";
import React from "react";
//import BackgroundIntro from "../../../public/assets/images/backgroundCespedCentral.jpg"
import Image from "next/image";
import Buttons from "@/components/Buttons/Buttons";
import Link from "next/link";

function Intro() {
    return (
        <div
            id="intro"
            className="flex items-center justify-center w-full h-screen bg-center bg-cover bg-intro-background"
        >
            <div
                id="intro-wrapper"
                className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-center  p-30 md:p-20 bg-gray-100 bg-opacity-0 bg-clip-padding backdrop-filter backdrop-blur-[2px]"
            >
                <span className="text-2xl text-center md:text-6xl font-semibold text-[#20221f] [text-shadow:_7px_5px_10px_rgba(21,32,13,0.43)]">
                    Bienvenido a
                </span>
                <h1 className="text-2xl text-center md:text-6xl font-[900] text-[#20221f] [text-shadow:_7px_5px_10px_rgba(21,32,13,0.43)]">
                    ATC Dream Match
                </h1>
                <Link href={"/home"} className="mt-10">
                    <Buttons
                        label="Ingresar"
                        variant="tertiary"
                        onClick={() => { }}
                    ></Buttons>
                </Link>
            </div>
        </div>
    );
}

export default Intro;

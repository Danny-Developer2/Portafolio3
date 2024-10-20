
"use client"


import Image from "next/image";
import Home from "../public/home-4.png"
import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src={Home} priority={true} width="400" height="400" className="w-full h-full " alt="Particles " />
        </MotionTransition>
    )
}
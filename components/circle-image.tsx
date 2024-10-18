"use client"

import Image from 'next/image'
import Services from "../public/services.png"

const CircleImage = () => {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src={Services} width="300" height="300" className="w-full h-full " alt="Particles " />
        </div>

    );
}

export default CircleImage;
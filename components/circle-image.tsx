"use client"

import Image from 'next/image'
import ServicesImage from "../Public/services.png"

const CircleImage = () => {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src={ServicesImage} width="300" height="300" className="w-full h-full " alt="Particles " />
        </div>

    );
}

export default CircleImage;
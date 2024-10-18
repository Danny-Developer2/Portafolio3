import Image from "next/image";
import { MotionTransition } from "./transition-component";
import Service from '../public/services.png'

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src={Service} width="400" height="400" className="w-[350px] h-full " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServices;
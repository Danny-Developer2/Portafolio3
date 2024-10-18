"use client"
import Profile from "../Public/avatar-1.png"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-10 py-20 md:py-0 md:grid-cols-2 gap-20">
                <Image src={Profile} priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Ningun Sistema es Seguro, <br />
                        <TypeAnimation
                            sequence={[
                                'Rompe el código,',
                                1000,
                                'Cambia el Mundo.',
                                1000,
                                
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como desarrollador Full Stack  me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="https://drive.google.com/file/d/13Ey5oJEC5gFtCYXS689zKqPjM-uExCvB/view?usp=sharing"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Descargar Cv
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
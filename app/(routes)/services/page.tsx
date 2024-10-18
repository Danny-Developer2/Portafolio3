import AvatarServices from "@/components/avatar-services";
import SliderServices from "@/components/slider-services";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <>
            
            <AvatarServices />
            <div className="grid items-center  justify-flex h-screen max-w-5xl gap-0 mx-auto md:grid-cols-2">

                <div className="max-w-[450px]">
                    <h1 className="text-6xl leading-tight text-center md:text-left md:text-3xl md:mb-4">
                        Mis <span className="font-bold text-secondary"> servicios.</span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
                    </p>
                    <Link href="https://www.linkedin.com/in/juan-daniel-luevano-ruiz-9b7a24175/">
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                        Contacta conmigo
                    </button>
                    </Link>
                    
                </div>

                {/* SLIDER */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 ">
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;

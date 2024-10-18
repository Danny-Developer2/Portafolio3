"use client"
import Link from "next/link"

import { socialNetworks } from "@/data";
const  Header = () => {
    return (
        <header>
          
          <div className="container justify-between max-w-9xl mx-auto min-w-1xl md:flex">
                    <Link href='/'>
                        <h1 className="my-2 text-4xl font-bold text-center md:text-left">
                            Juan
                            <span className="text-secondary">-Luevano</span>
                            <span className="text-center"> Dev</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-200 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
        </header>
        
    )
}

export default Header
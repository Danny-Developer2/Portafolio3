"use client"

import Link from "next/link";

import { itemsNavbar } from "@/data";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const router = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    

    return (
         
           
        <div>
            <div className="fixed sm:hidden top-0 left-0 right-0 z-50 bg-[#1f1934] p-4">
            <button onClick={toggleMenu} className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {isOpen && (
                <nav className="mt-2">
                 <div className="flex flex-col items-center"> 
                        {itemsNavbar.map((item) => (
                            <Link key={item.id} href={item.link} className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-150">
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </nav>
            )} </div>

           
            <MotionTransition position="right" className="hidden sm:flex fixed z-40 flex-col items-center justify-center w-full mt-auto h-max bottom-10">
                <nav>
                    <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                        {itemsNavbar.map((item) => (
                            <div
                                key={item.id}
                                className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
                                data-tooltip-target="tooltip-default">
                                <Link href={item.link}>{item.icon}</Link>
                            </div>
                        ))}
                    </div>
                </nav>
            </MotionTransition>
        </div>

    );
}

export default Navbar;
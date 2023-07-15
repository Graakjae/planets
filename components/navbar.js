"use client";

import Link from "next/link";
import { PlanetData } from "../planetData/planetData.js";
import { useState } from "react";
import Image from "next/image.js";
import burgerMenuImg from "../assets/icon-hamburger.svg";

export default function Navbar() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    return (
        <div className="justify-between items-center border-b-[0.5px] border-slate-400 lg:flex md:pb-6 lg:pb-0">
            <div className="flex justify-between md:justify-center items-center px-6 py-10">
                <Link href="/" className="z-10 text-center w-full">
                    <h2 className="text-white text-4xl font-Antonio md:text-center">THE PLANETS</h2>
                </Link>
                <Image
                    src={burgerMenuImg}
                    width={30}
                    height={30}
                    alt="burger menu"
                    onClick={() => setBurgerMenu(!burgerMenu)}
                    className="z-10 md:hidden h-[20px] w-[20px]"
                />
            </div>

            {burgerMenu && (
                <div>
                    <div className="md:hidden absolute bg-[#070625] w-[100%] z-10">
                        <div className="grid grid-cols-2 gap-20 px-[20px] mt-10">
                            {PlanetData.map(pd => (
                                <Link href={`/planets/${pd.name}`}>
                                    <div
                                        onClick={() => setBurgerMenu(false)}
                                        className="hover:text-slate-200 text-slate-400"
                                    >
                                        <Image className=":w-[200px] h-full mx-auto" src={pd.images.planet} />
                                        <h2 className="text-center mt-2 font-Spartan text-[20px]">{pd.name}</h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setBurgerMenu(!burgerMenu);
                        }}
                        className="fixed inset-0 bg-black opacity-40 z-0"
                    ></div>
                </div>
            )}
            <div className="hidden md:block md:text-center lg:text-right">
                {PlanetData.map(planet => (
                    <Link
                        className="text-slate-400 hover:text-slate-200 uppercase px-3 font-Spartan tracking-wider font-normal text-sm"
                        href={`/planets/${planet.name}`}
                    >
                        {planet.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

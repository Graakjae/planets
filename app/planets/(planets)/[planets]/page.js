"use client";
import { useEffect, useState } from "react";
import { PlanetData } from "../../../../planetData/planetData.js";
import { useParams } from "next/navigation";
import Image from "next/image";
import sourceImg from "../../../../assets/icon-source.svg";
export default function Planet() {
    const [planet, setPlanet] = useState([]);
    const [state, setState] = useState();
    const [desc, setDesc] = useState();
    const params = useParams();
    console.log(params);

    useEffect(() => {
        async function getPlanet() {
            const planet = PlanetData.filter(planet => planet.name === params.planets);
            console.log(planet);
            setPlanet(planet);
        }
        getPlanet();
        console.log(planet);
    }, []);

    console.log(state);

    return (
        <>
            {planet.map(planet => (
                <div className="flex justify-center">
                    <div className="lg:w-[80%] w-[100%]">
                        <div className="md:hidden">
                            <div className="font-Spartan tracking-widest text-sm flex justify-around font-medium">
                                <div
                                    onClick={e => {
                                        setState(planet.images.planet);
                                        setDesc(planet.overview.content);
                                    }}
                                >
                                    <p
                                        className={`${
                                            desc === planet.overview.content ? "text-white" : "text-slate-400"
                                        } py-6`}
                                    >
                                        OVERVIEW
                                    </p>
                                    <div
                                        className={`${
                                            desc === planet.overview.content
                                                ? "border-b-[3px] border-purple-700"
                                                : "border-none"
                                        }`}
                                    ></div>
                                </div>
                                <div
                                    onClick={e => {
                                        setState(planet.images.internal);
                                        setDesc(planet.structure.content);
                                    }}
                                >
                                    <p
                                        className={`${
                                            desc === planet.structure.content ? "text-white" : "text-slate-400"
                                        }  py-6`}
                                    >
                                        STRUCTURE
                                    </p>
                                    <div
                                        className={`${
                                            desc === planet.structure.content
                                                ? "border-b-[3px] border-purple-700"
                                                : "border-none"
                                        } `}
                                    ></div>
                                </div>
                                <div
                                    onClick={e => {
                                        setState(planet.images.geology);
                                        setDesc(planet.geology.content);
                                    }}
                                >
                                    <p
                                        className={`${
                                            desc === planet.geology.content ? "text-white" : "text-slate-400"
                                        } py-6`}
                                    >
                                        GEOLOGY
                                    </p>
                                    <div
                                        className={`${
                                            desc === planet.geology.content
                                                ? "border-b-[3px] border-purple-700"
                                                : "border-none"
                                        } `}
                                    ></div>
                                </div>
                            </div>
                            <div className="border-b-[0.5px] border-slate-400 w-[100%]"></div>
                        </div>
                        <div className="lg:flex justify-between lg:mt-20 w-[100%] lg:h-[700px]">
                            <Image
                                className="w-[80%] h-[80%] mx-auto  md:w-[60%] md:h-[60%] lg:w-[80%] lg:h-[80%] p-24 lg:p-10 lg:pr-[100px] lg:pt-[100px] object-contain"
                                src={state ? state : planet.images.planet}
                                alt={planet.name}
                            ></Image>
                            <div className="w-[100%] lg:w-[50%] md:pt-20 text-center md:text-left px-6 md:px-10 lg:px-0 md:flex md:justify-between lg:block">
                                <div className="md:w-[45%] lg:w-[100%]">
                                    <h2 className="text-7xl text-white font-Antonio">{planet.name}</h2>
                                    <p className="text-slate-400 font-Spartan pt-10 h-[250px] md:h-full">
                                        {desc ? desc : setDesc(planet.overview.content)}
                                    </p>
                                    <div className="font-Spartan flex justify-center md:justify-start md:pt-10 gap-5">
                                        <p className="text-slate-500">Source</p>
                                        <a className="text-slate-400 underline" href={planet.overview.source}>
                                            Wikipedia
                                        </a>
                                        <Image src={sourceImg} className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="hidden relative md:block pt-10 font-Spartan tracking-widest text-sm md:w-[45%] lg:w-[100%]">
                                    <div
                                        className={`${
                                            desc === planet.overview.content
                                                ? "bg-purple-700 border-transparent"
                                                : "bg-transparent border-slate-700 "
                                        } border-[1px] mb-4 flex font-medium p-4`}
                                        onClick={e => {
                                            setState(planet.images.planet);
                                            setDesc(planet.overview.content);
                                        }}
                                    >
                                        <p className="text-slate-400 pr-6 pl-2">01</p>
                                        <p className="text-white">OVERVIEW</p>
                                    </div>
                                    <div
                                        className={`${
                                            desc === planet.structure.content
                                                ? "bg-purple-700 border-transparent"
                                                : "bg-transparent border-slate-700 "
                                        } border-[1px] mb-4 flex font-medium p-4`}
                                        onClick={e => {
                                            setState(planet.images.internal);
                                            setDesc(planet.structure.content);
                                        }}
                                    >
                                        <p className="text-slate-400 pr-5 pl-2">02</p>
                                        <p className="text-white">INTERNAL STRUCTURE</p>
                                    </div>
                                    <div
                                        className={`${
                                            desc === planet.geology.content
                                                ? "bg-purple-700 border-transparent"
                                                : "bg-transparent border-slate-700 "
                                        } border-[1px] mb-4 flex font-medium p-4`}
                                        onClick={() => {
                                            setState(planet.images.geology);
                                            setDesc(planet.geology.content);
                                        }}
                                    >
                                        <p className="text-slate-400 pr-5 pl-2">03</p>
                                        <p className="text-white">SURFACE GEOLOGY</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex justify-between gap-5 my-10 px-6 md:px-10 lg:px-0">
                            {planet.facts.map(fact => (
                                <div className="border-slate-700 flex justify-between md:block border-[1px] w-full font-medium p-6 mt-[20px] items-center md:w-[100%]">
                                    <p className="text-slate-600 font-Spartan text-xs">{fact.name}</p>
                                    <p className="text-white text-4xl font-Antonio md:mt-3">{fact.fact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

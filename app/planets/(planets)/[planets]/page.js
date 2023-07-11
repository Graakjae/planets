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
                    <div className="max-w-7xl">
                        <div className="flex">
                            <Image
                                className="w-[60%] auto-h p-20"
                                src={state ? state : planet.images.planet}
                                alt={planet.name}
                            ></Image>
                            <div className="max-w-[40%] p-20">
                                <h2 className="text-7xl text-white font-Antonio">{planet.name}</h2>
                                <p className="text-slate-400 font-Spartan pt-10">
                                    {desc ? desc : planet.overview.content}
                                </p>
                                <div className="font-Spartan flex pt-10 gap-5">
                                    <p className="text-slate-500">Source</p>
                                    <a className="text-slate-400 underline" href={planet.overview.source}>
                                        Wikipedia
                                    </a>
                                    <Image src={sourceImg} className="w-4 h-4" />
                                </div>
                                <div className="pt-10 font-Spartan tracking-widest text-sm">
                                    <div
                                        className="border-slate-700 border-[1px] mb-4 flex font-medium p-4"
                                        onClick={e => {
                                            setState(planet.images.planet);
                                            setDesc(planet.overview.content);
                                        }}
                                    >
                                        <p className="text-slate-600 pr-6 pl-2">01</p>
                                        <p className="text-white">OVERVIEW</p>
                                    </div>
                                    <div
                                        className="border-slate-700 border-[1px] mb-4 flex font-medium p-4"
                                        onClick={e => {
                                            setState(planet.images.internal);
                                            setDesc(planet.structure.content);
                                        }}
                                    >
                                        <p className="text-slate-600 pr-5 pl-2">02</p>
                                        <p className="text-white">INTERNAL STRUCTURE</p>
                                    </div>
                                    <div
                                        className="border-slate-700 border-[1px] mb-4 flex font-medium p-4"
                                        onClick={() => {
                                            setState(planet.images.geology);
                                            setDesc(planet.geology.content);
                                        }}
                                    >
                                        <p className="text-slate-600 pr-5 pl-2">03</p>
                                        <p className="text-white">SURFACE GEOLOGY</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            {planet.facts.map(fact => (
                                <div className="border-slate-700 border-[1px] w-full font-medium p-6">
                                    <p className="text-slate-600 font-Spartan text-xs">{fact.name}</p>
                                    <p className="text-white text-4xl font-Antonio mt-3">{fact.fact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

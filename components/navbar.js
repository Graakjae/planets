import Link from "next/link";
import { PlanetData } from "../planetData/planetData.js";

export default function Navbar() {
    return (
        <div className="flex justify-between p-8 items-center border-b-[0.5px] border-slate-400">
            <h2 className="text-white text-4xl font-Antonio">THE PLANETS</h2>
            <div>
                {PlanetData.map(planet => (
                    <Link
                        className="text-slate-400 hover:text-slate-200 uppercase px-4 font-Spartan tracking-wider font-normal text-sm"
                        href={`/planets/${planet.name}`}
                    >
                        {planet.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

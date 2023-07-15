import Image from "next/image";
import { PlanetData } from "@/planetData/planetData";
import Link from "next/link";
import { nanoid } from "nanoid";
export default function Home() {
    return (
        <main>
            <h1 className="text-center mt-2 font-Antonio text-[30px] md:text-[60px] text-white ">
                PICK A PLANET TO LEARN!
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 px-[20px] mt-10">
                {PlanetData.map(pd => (
                    <Link key={nanoid()} href={`/planets/${pd.name}`}>
                        <div className="hover:text-slate-200 text-slate-400 ">
                            <Image className="md:w-[200px] md:h-[200px] mx-auto" src={pd.images.planet} alt={pd.name} />
                            <h2 className="text-center mt-2 font-Spartan text-[20px]">{pd.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

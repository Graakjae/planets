import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import backgroundStars from "../assets/background-stars.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Planets fact site",
    description: "Facts about all the planets"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head></head>
            <body className="bg-[#070625]">
                <Image className="absolute z-[-1]" src={backgroundStars} alt="stars background" />
                <Navbar />
                {children}
            </body>
        </html>
    );
}

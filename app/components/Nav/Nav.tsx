"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import LoginButton from "./LoginButton";

const Nav = () => {
    const pathname = useSelectedLayoutSegment();

    return (
        <nav className="w-full px-10 py-4 bg-neutral-800 text-neutral-200 font-calibre_light text-lg">
            <ul className="flex gap-12 justify-center">
                <li>
                    <a className={`${pathname === "schedule" && "font-calibre_medium text-white"}`} href="/schedule">
                        Schedule & Scores
                    </a>
                </li>
                <li>
                    <a className={`${pathname === "standings" && "font-calibre_medium text-white"}`} href="/standings">
                        Standings
                    </a>
                </li>
            </ul>
            <LoginButton />
        </nav>
    );
};

export default Nav;
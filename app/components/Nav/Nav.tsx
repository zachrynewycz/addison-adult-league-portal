import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import LoginButton from "./LoginButton";

const Nav = () => {
    const pathname = useSelectedLayoutSegment();

    return (
        <nav className="w-full py-4 bg-neutral-800 text-neutral-200 font-calibre_light text-lg">
            <ul className="flex max-w-lg mx-auto text-center">
                <li className="flex-1">
                    <a
                        className={`${pathname === "schedule" ? "font-calibre_medium text-white" : ""}`}
                        href="/schedule"
                    >
                        Schedule
                    </a>
                </li>
                <li className="flex-1">
                    <a
                        className={`${pathname === "standings" ? "font-calibre_medium text-white" : ""}`}
                        href="/standings"
                    >
                        Standings
                    </a>
                </li>
                <li className="flex-1">
                    <a
                        className={`${pathname === "playoffs" ? "font-calibre_medium text-white" : ""}`}
                        href="/playoffs"
                    >
                        Playoffs
                    </a>
                </li>
            </ul>
            <LoginButton />
        </nav>
    );
};

export default Nav;

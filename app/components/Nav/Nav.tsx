import { useSelectedLayoutSegment } from "next/navigation";
import LoginButton from "./LoginButton";
import Sidebar from "./Sidebar";

const Nav = () => {
    const pathname = useSelectedLayoutSegment();

    return (
        <nav className="w-full py-3 bg-[#1a1a1a] text-neutral-200 font-calibre_light text-lg grid-cols-3 grid">
            <ul className="hidden md:flex mx-auto gap-16 col-start-2">
                <li className="flex-1">
                    <a className={pathname === "schedule" ? "font-calibre_medium text-white" : ""} href="/schedule">
                        Schedule
                    </a>
                </li>
                <li className="flex-1">
                    <a className={pathname === "standings" ? "font-calibre_medium text-white" : ""} href="/standings">
                        Standings
                    </a>
                </li>
                <li className="flex-1">
                    <a className={pathname === "playoffs" ? "font-calibre_medium text-white" : ""} href="/playoffs">
                        Playoffs
                    </a>
                </li>
            </ul>

            <div className="col-start-3 text-right px-10">
                <LoginButton />
                <Sidebar />
            </div>
        </nav>
    );
};

export default Nav;

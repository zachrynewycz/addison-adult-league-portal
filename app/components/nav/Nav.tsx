"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();
    //Remove "/" from url
    const cleanedPathname = pathname.slice(1);

    return (
        <nav>
            <Link className={`${cleanedPathname === "schedule" ? "" : ""}`} href="/schedule">
                Schedule & Scores
            </Link>
            <Link className={`${cleanedPathname === "standings" ? "" : ""}`} href="/standings">
                Standings
            </Link>
        </nav>
    );
};

export default Nav;

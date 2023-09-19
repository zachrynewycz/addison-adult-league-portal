"use client";
import DivisionGroupSelection from "../components/DivisionGroupSelection/DivisonGroupSelection";
import StandingTable from "./StandingTable";

function StandingsPage() {
    return (
        <main className="py-10 mx-auto md:max-w-7xl">
            <h1 className="font-calibre_semi_bold text-xl mb-5">Adult League Standings</h1>
            <DivisionGroupSelection />
            <StandingTable />
        </main>
    );
}

export default StandingsPage;

"use client";
import StandingToolbar from "../components/AdminToolbar/StandingToolbar";
import DivisionGroupSelection from "../components/DivisionGroupSelection/DivisonGroupSelection";
import StandingTable from "./StandingTable/StandingTable";

function StandingsPage() {
    return (
        <main className="py-10 mx-auto max-w-6xl px-10 md:px-20 xl:px-0">
            <h1 className="font-calibre_semi_bold text-xl mb-5">Adult League Standings</h1>

            <div className="flex justify-between">
                <DivisionGroupSelection />
                <StandingToolbar />
            </div>

            <StandingTable />
        </main>
    );
}

export default StandingsPage;

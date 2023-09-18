"use client";
import DivisionGroupSelection from "../components/divisionGroupSelection/DivisonGroupSelection";

function SchedulePage() {
    return (
        <main className="py-10 mx-auto md:max-w-7xl">
            <h1 className="font-calibre_semi_bold text-xl mb-5">Fall & Winter 2023-24 Season Schedule</h1>
            <DivisionGroupSelection />
        </main>
    );
}

export default SchedulePage;

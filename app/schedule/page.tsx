"use client";
import ScheduleToolbar from "../components/AdminToolbar/ScheduleToolbar";
import DivisionGroupSelection from "../components/DivisionGroupSelection/DivisonGroupSelection";
import { getCurrentSeasonAndYear } from "../utils/dateUtils";
import ScheduleTable from "./ScheduleTable/ScheduleTable";

function SchedulePage() {
    return (
        <main className="px-4 md:px-6 xl:px-0 py-10 mx-auto max-w-6xl">
            <h1 className="font-calibre_semi_bold text-xl mb-5">{getCurrentSeasonAndYear()} Season Schedule</h1>

            <div className="flex justify-between overflow-hidden">
                <DivisionGroupSelection />
                <ScheduleToolbar />
            </div>
            <ScheduleTable />
        </main>
    );
}

export default SchedulePage;

"use client";
import ScheduleToolbar from "../components/AdminToolbar/ScheduleToolbar";
import DivisionGroupSelection from "../components/DivisionGroupSelection/DivisonGroupSelection";
import { getCurrentSeasonAndYear } from "../utils/dateUtils";
import ScheduleTable from "./ScheduleTable/ScheduleTable";

function SchedulePage() {
    return (
        <main className="py-10 mx-auto md:max-w-7xl">
            <h1 className="font-calibre_semi_bold text-xl mb-5">{getCurrentSeasonAndYear()} Season Schedule</h1>

            <div className="flex justify-between">
                <DivisionGroupSelection />
                <ScheduleToolbar />
            </div>
            <ScheduleTable />
        </main>
    );
}

export default SchedulePage;

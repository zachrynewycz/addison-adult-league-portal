"use client";
import DivisionGroupSelection from "../components/DivisionGroupSelection/DivisonGroupSelection";
import { useAppSelector } from "../redux/hooks";
import { getCurrentSeasonAndYear } from "../utils/dateUtils";
import GoogleSheetFrame from "./GoogleSheetFrame";

function PlayoffsPage() {
    const { divisionNumber } = useAppSelector((state) => state.division);

    return (
        <main className="py-10 mx-auto md:max-w-7xl">
            <h1 className="font-calibre_semi_bold text-xl mb-5">D{divisionNumber} {getCurrentSeasonAndYear()} Playoff Bracket</h1>
            <DivisionGroupSelection />
            <GoogleSheetFrame division={divisionNumber}/>
        </main>
    );
}

export default PlayoffsPage;

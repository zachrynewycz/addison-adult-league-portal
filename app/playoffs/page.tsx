"use client";
import DivisionGroupSelection from "../components/DivisionGroupSelection/DivisonGroupSelection";
import GoogleSheetFrame from "./GoogleSheetFrame";
import EditBracketButton from "./EditBracketButton";
import { useAppSelector } from "../redux/hooks";

function PlayoffsPage() {
    const { divisionNumber } = useAppSelector((state) => state.division);

    return (
        <main className="px-4 md:px-6 xl:px-0 py-10 mx-auto max-w-6xl">
            <h1 className="font-calibre_semi_bold text-xl mb-5">D{divisionNumber} Playoff Bracket</h1>

            <div className="flex justify-between">
                <DivisionGroupSelection />
                <EditBracketButton division={divisionNumber} />
            </div>

            <GoogleSheetFrame division={divisionNumber} />
        </main>
    );
}

export default PlayoffsPage;

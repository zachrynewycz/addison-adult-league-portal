"use client";
import DivisionGroupSelection from "../components/DivisionGroupSelection/DivisonGroupSelection";
import GoogleSheetFrame from "./GoogleSheetFrame";
import { useAppSelector } from "../redux/hooks";
import EditBracketButton from "./EditBracketButton";

function PlayoffsPage() {
    const { divisionNumber } = useAppSelector((state) => state.division);

    return (
        <main className="py-10 mx-auto max-w-6xl px-10 md:px-20 xl:px-0">
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

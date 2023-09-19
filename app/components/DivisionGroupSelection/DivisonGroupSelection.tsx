"use client";
import { setDivisionNumber } from "@/app/redux/slices/divisionSlice";
import { RootState } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";

const DivisionGroupSelection = () => {
    const dispatch = useDispatch();
    const divisionNumber = useSelector((state: RootState) => state.division.divisionNumber);

    const options = [
        { label: "Division 1", value: 1 },
        { label: "Division 2", value: 2 },
        { label: "Division 3", value: 3 },
    ];

    return (
        <div className="bg-[#f0f0ee] w-fit flex rounded-md font-calibre_regular">
            {options.map(({ label, value }) => (
                <button
                    className={`${
                        divisionNumber === value
                            ? "px-8 bg-white border-neutral-300 border-[1px] rounded-md pt-2 pb-1"
                            : "px-8 pt-2 pb-1"
                    }`}
                    key={label}
                    onClick={() => dispatch(setDivisionNumber(value))}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default DivisionGroupSelection;

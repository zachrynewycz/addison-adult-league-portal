import { useMemo, useState } from "react";

const DivisionGroupSelection = () => {
    const options = useMemo(
        () => [
            { label: "Division 1", value: 1 },
            { label: "Division 2", value: 2 },
            { label: "Division 3", value: 3 },
        ],
        []
    );
    const [selectedValue, setSelectedValue] = useState<number>(1);

    // isActive={selectedValue === value}
    // #f7f7f4
    // #f0f0ee
    return (
        <div>
            {options.map(({ label, value }) => (
                <button key={label} onClick={() => setSelectedValue(value)}>
                    {label}
                </button>
            ))}
        </div>
    );
};

export default DivisionGroupSelection;

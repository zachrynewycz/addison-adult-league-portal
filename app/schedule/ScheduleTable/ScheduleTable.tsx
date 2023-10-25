"use client";
import React from "react";
import Row from "./Row";
import useSchedule from "@/app/hooks/useSchedule";

const ScheduleTable = () => {
    const schedule = useSchedule();

    if (schedule.length === 0) {
        return <h1 className="font-calibre_regular text-xl mt-10">There are no scheduled games in this division</h1>;
    }

    return (
        <table className="text-neutral-700 schedule-table">
            <thead className="text-sm text-left">
                <tr>
                    <th>HOME</th>
                    <th>AWAY</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>RINK</th>
                    <th>SCORE</th>
                </tr>
            </thead>
            <tbody>
                {schedule.map((doc) => (
                    <React.Fragment key={doc.id}>
                        {doc?.weekSeparator ? (
                            <tr className="font-calibre_light text-neutral-700" key={doc.weekKey}>
                                <td>Week {doc.weekKey}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ) : (
                            <Row key={doc.id} eventData={doc} />
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default ScheduleTable;

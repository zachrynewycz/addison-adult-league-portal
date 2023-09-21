"use client";
import Row from "./Row";
import useSchedule from "@/app/hooks/useSchedule";

const ScheduleTable = () => {
    const schedule = useSchedule();

    if (schedule.length === 0) {
        return <h1 className="font-calibre_regular text-xl mt-10">There are no scheduled games in this division</h1>;
    }

    return (
        <table className="text-neutral-700 mt-10 font-calibre_light schedule-table">
            <thead className="text-sm">
                <tr>
                    <th>HOME</th>
                    <th>AWAY</th>
                    <th>TIME</th>
                    <th>DATE</th>
                    <th>RINK</th>
                    <th>SCORE</th>
                </tr>
            </thead>
            <tbody>
                {schedule.map((doc) => (
                    <Row key={doc.id} eventData={doc} />
                ))}
            </tbody>
        </table>
    );
};

export default ScheduleTable;

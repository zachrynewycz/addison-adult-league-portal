"use client";
import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Row from "./Row";

const ScheduleTable = () => {
    const [schedule, setSchedule] = useState<any[]>([]);
    const { divisionNumber } = useAppSelector((state) => state.division);

    useEffect(() => {
        const fetchSchedule = async () => {
            const q = query(
                collection(db, "schedule"),
                where("division", "==", divisionNumber),
                orderBy("date", "asc")
            );
            const docSnapshot = await getDocs(q);

            const scheduleData = docSnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setSchedule(scheduleData);
        };
        fetchSchedule();
    }, [divisionNumber]);

    if (schedule.length === 0) {
        return <h1 className="font-calibre_regular text-xl mt-10">There are no games in this division</h1>;
    }

    return (
        <table className="text-neutral-500 mt-10">
            <thead className="font-calibre_light">
                <tr>
                    <th>HOME</th>
                    <th>AWAY</th>
                    <th>TIME</th>
                    <th>DATE</th>
                    <th>RINK</th>
                    <th>SCORE</th>
                </tr>
            </thead>
            <tbody className="font-calibre_light">
                {schedule.map((doc) => (
                    <Row key={doc.id} eventData={doc} />
                ))}
            </tbody>
        </table>
    );
};

export default ScheduleTable;

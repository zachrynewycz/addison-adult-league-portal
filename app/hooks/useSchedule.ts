import { useState, useEffect } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { useAppSelector } from "../redux/hooks";
import { db } from "../firebase/config";

const useSchedule = () => {
    const [schedule, setSchedule] = useState<any[]>([]);
    const { divisionNumber } = useAppSelector((state) => state.division);

    useEffect(() => {
        const fetchSchedule = async () => {
            const q = query(
                collection(db, "schedule"),
                where("division", "==", divisionNumber),
                orderBy("date", "asc")
            );
            try {
                const docSnapshot = await getDocs(q);

                if (docSnapshot.size === 0) {
                    setSchedule([]);
                } else {
                    const scheduleData = docSnapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    });
                    setSchedule(scheduleData);
                }
            } catch (error) {
                console.error("Error fetching schedule:", error);
            }
        };
        fetchSchedule();
    }, [divisionNumber]);

    return schedule;
};

export default useSchedule;

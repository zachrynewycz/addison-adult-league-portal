import { useState, useEffect } from "react";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { useAppSelector } from "../redux/hooks";
import { db } from "../firebase/config";
import { format, startOfWeek } from "date-fns";

const useSchedule = () => {
    const [schedule, setSchedule] = useState<any[]>([]);
    const { divisionNumber } = useAppSelector((state) => state.division);

    useEffect(() => {
        const scheduleRef = collection(db, "schedule");
        const q = query(scheduleRef, where("division", "==", divisionNumber), orderBy("date", "asc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const scheduleData: any[] = [];

            let currentWeek = "";
            let currentCount = 1;
            let firstWeek = true;

            querySnapshot.forEach((doc) => {
                const weekStart = startOfWeek(doc.data().date.toDate(), { weekStartsOn: 1 });
                const weekKey = format(weekStart, "yyyy-MM-dd");

                if (weekKey !== currentWeek) {
                    if (currentWeek !== "" && !firstWeek) {
                        scheduleData.push({ weekSeparator: true, weekKey: currentCount });
                    }
                    currentWeek = weekKey;
                    currentCount++;
                    if (firstWeek) firstWeek = false;
                }

                scheduleData.push({ id: doc.id, ...doc.data() });
            });
            setSchedule(scheduleData);
        });

        return () => unsubscribe();
    }, [divisionNumber]);

    return schedule;
};

export default useSchedule;

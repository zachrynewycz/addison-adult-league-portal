import { useState, useEffect } from "react";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { useAppSelector } from "../redux/hooks";
import { db } from "../firebase/config";

const useSchedule = () => {
    const [schedule, setSchedule] = useState<any[]>([]);
    const { divisionNumber } = useAppSelector((state) => state.division);

    useEffect(() => {
        const scheduleRef = collection(db, "schedule");
        const q = query(scheduleRef, where("division", "==", divisionNumber), orderBy("date", "asc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const scheduleData: any[] = [];
            querySnapshot.forEach((doc) => {
                scheduleData.push({ id: doc.id, ...doc.data() });
            });
            setSchedule(scheduleData);
        });

        return () => unsubscribe();
    }, [divisionNumber]);

    return schedule;
};

export default useSchedule;

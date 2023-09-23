import { useState, useEffect } from "react";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { useAppSelector } from "../redux/hooks";
import { db } from "../firebase/config";

const useStandings = () => {
    const [standings, setStandings] = useState<any[]>([]);
    const { divisionNumber } = useAppSelector((state) => state.division);

    useEffect(() => {
        const standingsRef = collection(db, "standings");
        const q = query(standingsRef, where("division", "==", divisionNumber), orderBy("points", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const standingsData: any[] = [];
            querySnapshot.forEach((doc) => {
                standingsData.push({ id: doc.id, ...doc.data() });
            });
            setStandings(standingsData);
        });

        return () => unsubscribe();
    }, [divisionNumber]);

    return standings;
};

export default useStandings;

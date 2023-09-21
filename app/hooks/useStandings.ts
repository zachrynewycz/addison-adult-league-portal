import { useState, useEffect } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAppSelector } from "../redux/hooks";

const useStandings = () => {
    const [standings, setStandings] = useState<any[]>([]);
    const { divisionNumber } = useAppSelector((state) => state.division);

    useEffect(() => {
        const fetchStandings = async () => {
            const q = query(
                collection(db, "standings"),
                where("division", "==", divisionNumber),
                orderBy("points", "desc")
            );
            try {
                const docSnapshot = await getDocs(q);

                if (docSnapshot.size === 0) {
                    setStandings([]);
                } else {
                    const standingsData = docSnapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    });
                    setStandings(standingsData);
                }
            } catch (error) {
                console.error("Error fetching standings:", error);
            }
        };
        fetchStandings();
    }, [divisionNumber]);

    return standings;
};

export default useStandings;

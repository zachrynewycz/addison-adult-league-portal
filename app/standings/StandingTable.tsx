import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAppSelector } from "../redux/hooks";
import Row from "./Row";

const StandingTable = () => {
    const [standings, setStandings] = useState<any[]>([]);
    const { divisionNumber } = useAppSelector((state) => state.division);

    useEffect(() => {
        const fetchStandings = async () => {
            const q = query(
                collection(db, "standings"),
                where("division", "==", divisionNumber),
                orderBy("points", "desc")
            );
            const docSnapshot = await getDocs(q);

            const standingsData = docSnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setStandings(standingsData);
        };
        fetchStandings();
    }, [divisionNumber]);

    if (standings.length === 0) {
        return <h1 className="font-calibre_regular text-xl mt-10">There are no teams in this division</h1>;
    }

    return (
        <table className="text-neutral-500 mt-10 standings-table">
            <thead className="font-calibre_light">
                <tr>
                    <th>TEAM</th>
                    <th>GP</th>
                    <th>W</th>
                    <th>L</th>
                    <th>OTL</th>
                    <th>PTS</th>
                    <th>GF</th>
                    <th>GA</th>
                </tr>
            </thead>
            <tbody className="font-calibre_light">
                {standings.map((doc) => (
                    <Row key={doc.id} teamData={doc} />
                ))}
            </tbody>
        </table>
    );
};

export default StandingTable;

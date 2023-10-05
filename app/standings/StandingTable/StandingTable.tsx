import useStandings from "@/app/hooks/useStandings";
import Row from "./Row";

const StandingTable = () => {
    const standings = useStandings();

    if (standings.length === 0) {
        return <h1 className="font-calibre_regular text-xl mt-10">There are no teams in this division</h1>;
    }

    return (
        <table className="text-neutral-700 standings-table overflow-x-scroll">
            <thead className="text-sm">
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
            <tbody>
                {standings.map((doc) => (
                    <Row key={doc.id} teamData={doc} />
                ))}
            </tbody>
        </table>
    );
};

export default StandingTable;

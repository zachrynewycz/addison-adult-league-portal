import { useState } from "react";
import EditAndDeleteButtons from "./EditAndDeleteButtons";

const Row = ({ teamData }: { teamData: any }) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <tr>
            <td>{teamData.name}</td>
            <td>{teamData.games_played}</td>
            <td>{teamData.wins}</td>
            <td>{teamData.losses}</td>
            <td>{teamData.ot_losses}</td>
            <td>{teamData.points}</td>
            <td>{teamData.goals_for}</td>
            <td>{teamData.goals_against}</td>
            <EditAndDeleteButtons docId={teamData.id} editMode={editMode} setEditMode={setEditMode} />
        </tr>
    );
};

export default Row;

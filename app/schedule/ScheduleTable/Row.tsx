import { useState } from "react";
import { format } from "date-fns";
import EditAndDeleteButtons from "./EditAndDeleteButtons";

const Row = ({ eventData }: { eventData: any }) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <tr>
            <td className="font-calibre_regular font-bold text-neutral-900">{eventData.home_team}</td>
            <td className="font-calibre_regular font-bold text-neutral-900">{eventData.away_team}</td>
            <td>{format(eventData.date.toDate(), "eee, MMM dd")}</td>
            <td>{format(eventData.date.toDate(), "h:mm")}</td>
            <td>{eventData.rink}</td>
            <td>
                {eventData.home_score} - {eventData.away_score} {eventData.status}
            </td>
            <EditAndDeleteButtons editMode={editMode} setEditMode={setEditMode} docId={eventData.id} />
        </tr>
    );
};

export default Row;

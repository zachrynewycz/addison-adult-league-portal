import { useState } from "react";
import { format, parse } from "date-fns";
import EditAndDeleteButtons from "./EditAndDeleteButtons";

const Row = ({ eventData }: { eventData: any }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const parsedDate = parse(eventData.date, "MMMM d, yyyy 'at' h:mm:ss a 'GMT'XXX", new Date());

    return (
        <tr>
            <td className="font-calibre_regular font-bold text-neutral-900">{eventData.home_team}</td>
            <td className="font-calibre_regular font-bold text-neutral-900">{eventData.away_team}</td>
            <td>{format(parsedDate, "EEEE, MMM do")}</td>
            <td>{eventData.time}</td>
            <td>{eventData.rink}</td>
            <td>
                {eventData.home_score} - {eventData.away_score} {eventData.status}
            </td>
            <EditAndDeleteButtons editMode={editMode} setEditMode={setEditMode} docId={eventData.id} />
        </tr>
    );
};

export default Row;

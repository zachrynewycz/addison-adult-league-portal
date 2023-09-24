import { format, parse } from "date-fns";
import EditAndDeleteButtons from "./EditAndDeleteButtons";
import { useState } from "react";

const Row = ({ eventData }: { eventData: any }) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <tr>
            <td className="font-calibre_medium text-lg text-neutral-900">{eventData.home_team}</td>
            <td className="font-calibre_medium text-lg text-neutral-900">{eventData.away_team}</td>
            <td>{eventData.time}</td>
            <td>{format(parse(eventData.date, "MMMM d, yyyy 'at' h:mm:ss a 'GMT'XXX", new Date()), "EEEE, MMM Mo")}</td>
            <td>{eventData.rink}</td>
            <td>
                {eventData.home_score} - {eventData.away_score} {eventData.status}
            </td>
            <EditAndDeleteButtons editMode={editMode} setEditMode={setEditMode} docId={eventData.id} />
        </tr>
    );
};

export default Row;

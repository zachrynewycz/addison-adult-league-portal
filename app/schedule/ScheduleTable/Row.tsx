import { format, parse } from "date-fns";

const Row = ({ eventData }: { eventData: any }) => {
    const parsedDate = parse(eventData.date, "MMMM d, yyyy 'at' h:mm:ss a 'GMT'XXX", new Date());

    return (
        <tr>
            <td className="font-calibre_medium text-lg text-neutral-900">{eventData.home_team}</td>
            <td className="font-calibre_medium text-lg text-neutral-900">{eventData.away_team}</td>
            <td>{eventData.time}</td>
            <td>{format(parsedDate, "EEEE, MMM Mo")}</td>
            <td>{eventData.rink}</td>
            <td>
                {eventData.home_score} - {eventData.away_score} {eventData.status}
            </td>
        </tr>
    );
};

export default Row;

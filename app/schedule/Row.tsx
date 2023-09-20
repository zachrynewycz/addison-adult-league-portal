const Row = ({ eventData }: { eventData: any }) => {
    return (
        <tr>
            <td>{eventData.home_team}</td>
            <td>{eventData.away_team}</td>
            <td>{eventData.time}</td>
            <td>{eventData.date}</td>
            <td>{eventData.score}</td>
        </tr>
    );
};

export default Row;

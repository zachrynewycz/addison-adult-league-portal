const Row = ({ teamData }: { teamData: any }) => {
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
        </tr>
    );
};

export default Row;

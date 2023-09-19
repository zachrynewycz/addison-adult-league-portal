import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";

interface IStanding {
    name: string;
    wins: number;
    losses: number;
    ot_losses: number;
    points: number;
    division: number;
    games_played: number;
    goals_for: number;
    goals_against: number;
}

export const addTeamStanding = async (teamName: string, divisionNumber: number) => {
    try {
        const docData: IStanding = {
            name: teamName,
            division: divisionNumber,
            wins: 0,
            losses: 0,
            ot_losses: 0,
            points: 0,
            games_played: 0,
            goals_for: 0,
            goals_against: 0,
        };

        await addDoc(collection(db, "standings"), docData);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

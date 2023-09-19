import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";

interface ITeamStanding {
    name: string;
    wins: number;
    losses: number;
    ot_losses: number;
    points: number;
    division: number;
}

export const addTeamStanding = async (teamName: string, divisionNumber: number) => {
    try {
        const docData: ITeamStanding = {
            name: teamName,
            wins: 0,
            losses: 0,
            ot_losses: 0,
            points: 0,
            division: divisionNumber,
        };

        await addDoc(collection(db, "standings"), docData);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

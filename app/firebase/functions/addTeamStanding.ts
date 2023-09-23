import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";

export const addTeamStanding = async (name: string, division: number) => {
    try {
        const docData = {
            name: name,
            division: division,
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

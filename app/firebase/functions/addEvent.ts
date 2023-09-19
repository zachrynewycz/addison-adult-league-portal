import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";

interface Event {
    homeTeam: string;
    awayTeam: string;
    division: number;
    date: string;
    time: string;
    rink: string;
}

export const addEvent = async (event: Event) => {
    try {
        const docData = {
            ...event,
            home_score: 0,
            away_score: 0,
        };

        await addDoc(collection(db, "schedule"), docData);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

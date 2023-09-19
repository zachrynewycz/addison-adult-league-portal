import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";
import { format } from "date-fns";

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
            home_team: event.homeTeam,
            away_team: event.awayTeam,
            division: event.division,
            date: event.date,
            time: format(new Date(event.time), "h:mm a"),
            rink: event.rink,
            score: "",
        };

        await addDoc(collection(db, "schedule"), docData);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

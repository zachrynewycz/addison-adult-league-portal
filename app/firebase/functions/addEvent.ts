import { Timestamp, addDoc, collection } from "firebase/firestore";
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
        await addDoc(collection(db, "schedule"), {
            home_team: event.homeTeam,
            away_team: event.awayTeam,
            division: event.division,
            date: Timestamp.fromDate(new Date(`${event.date} ${event.time}`)),
            time: format(new Date(event.time), "h:mm a"),
            rink: event.rink,
            score: "0 - 0",
        });
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

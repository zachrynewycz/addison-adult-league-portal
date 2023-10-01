import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../config";

interface Event {
    home_team: string;
    away_team: string;
    division: number;
    date: string;
    time: string;
    rink: string;
}

export const addEvent = async (event: Event) => {
    const date = new Date(`${event.date} ${event.time}`);

    try {
        await addDoc(collection(db, "schedule"), {
            home_team: event.home_team,
            away_team: event.away_team,
            home_score: 0,
            away_score: 0,
            date: Timestamp.fromDate(date),
            time: event.time,
            division: event.division,
            rink: event.rink,
            status: "",
        });
    } catch (error) {
        console.error("Error adding document:", error);
        alert("There has been an issue creating this event");
    }
};

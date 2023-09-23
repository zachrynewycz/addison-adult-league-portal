import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";
import { format, parse } from "date-fns";

interface Event {
    home_team: string;
    away_team: string;
    home_score: number;
    away_score: number;
    division: number;
    date: string;
    time: string;
    rink: string;
    status: string;
}

export const addEvent = async (event: Event) => {
    const parsedTime = parse(event.time, "HH:mm", new Date());

    try {
        await addDoc(collection(db, "schedule"), {
            home_team: event.home_team,
            away_team: event.away_team,
            home_score: event.home_score,
            away_score: event.away_score,
            division: event.division,
            date: format(new Date(`${event.date} ${event.time}`), "MMMM d, yyyy 'at' h:mm:ss a zzzz"),
            time: format(parsedTime, "h:mm a"),
            rink: event.rink,
            status: event.status,
        });
    } catch (error) {
        console.error("Error adding document:", error);
        alert("There has been an issue creating the event");
    }
};

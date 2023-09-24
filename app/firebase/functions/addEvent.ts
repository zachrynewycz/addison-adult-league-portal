import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";
import { format, parse } from "date-fns";

interface Event {
    home_team: string;
    away_team: string;
    division: number;
    date: string;
    time: string;
    rink: string;
}

export const addEvent = async (event: Event) => {
    try {
        await addDoc(collection(db, "schedule"), {
            home_team: event.home_team,
            away_team: event.away_team,
            home_score: 0,
            away_score: 0,
            unformatted_date: event.date,
            unformatted_time: event.time,
            date: format(new Date(`${event.date} ${event.time}`), "MMMM d, yyyy 'at' h:mm:ss a zzzz"),
            time: format(parse(event.time, "HH:mm", new Date()), "h:mm a"),
            division: event.division,
            rink: event.rink,
            status: "",
        });
    } catch (error) {
        console.error("Error adding document:", error);
        alert("There has been an issue creating this event");
    }
};

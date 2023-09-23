import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";
import { format, parse } from "date-fns";

interface Event {
    homeTeam: string;
    awayTeam: string;
    division: number;
    date: string;
    time: string;
    rink: string;
}

export const addEvent = async (event: Event) => {
    const parsedTime = parse(event.time, "HH:mm", new Date());

    try {
        await addDoc(collection(db, "schedule"), {
            home_team: event.homeTeam,
            away_team: event.awayTeam,
            division: event.division,
            date: format(new Date(`${event.date} ${event.time}`), "MMMM d, yyyy 'at' h:mm:ss a zzzz"),
            time: format(parsedTime, "h:mm a"),
            rink: event.rink,
            score: "0 - 0",
        });
    } catch (error) {
        console.error("Error adding document:", error);
        alert("There has been an issue creating the event");
    }
};

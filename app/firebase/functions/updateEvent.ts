import { doc, updateDoc } from "firebase/firestore";
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

export const updateEvent = async (event: Event, docId: string) => {
    console.log(event);
    try {
        const ref = doc(db, "schedule", docId);

        await updateDoc(ref, {
            ...event,
            date: format(new Date(`${event.date} ${event.time}`), "MMMM d, yyyy 'at' h:mm:ss a zzzz"),
            time: format(parse(event.time, "HH:mm", new Date()), "h:mm a"),
        });
    } catch (error) {
        console.error("Error adding document:", error);
        alert("There has been an issue updating the event");
    }
};

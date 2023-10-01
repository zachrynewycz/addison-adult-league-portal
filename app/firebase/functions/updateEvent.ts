import { Timestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../config";

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
    try {
        const date = new Date(`${event.date} ${event.time}`);

        const ref = doc(db, "schedule", docId);
        await updateDoc(ref, { ...event, date: Timestamp.fromDate(date) });
    } catch (error) {
        console.error("Error adding document:", error);
        alert("There has been an issue updating the event");
    }
};

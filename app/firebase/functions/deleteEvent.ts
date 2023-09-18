import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config";

export const deleteEvent = async (docId: string) => {
    try {
        await deleteDoc(doc(db, "schedule", docId));
    } catch (error) {
        console.error("There has been an issue deleting this event", error);
    }
};

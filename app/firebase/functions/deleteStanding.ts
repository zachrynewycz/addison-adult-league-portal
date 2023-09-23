import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config";

export const deleteStanding = async (docId: string) => {
    try {
        const ref = doc(db, "standings", docId);
        await deleteDoc(ref);
    } catch (error) {
        console.error("There has been an issue deleting the team", error);
    }
};

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";

export const updateScore = async (updatedScore: string, docId: string) => {
    try {
        const ref = doc(db, "schedule", docId);

        await updateDoc(ref, {
            score: updatedScore,
        });
    } catch (error) {
        console.error("Error updating document", error);
    }
};

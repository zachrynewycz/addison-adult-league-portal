import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";

export const updateStanding = async (standingData: any, docId: string) => {
    try {
        const ref = doc(db, "standings", docId);
        await updateDoc(ref, {
            ...standingData,
            games_played: standingData.wins + standingData.losses + standingData.ot_losses,
            points: standingData.wins * 2 + standingData.ot_losses,
        });
    } catch (error) {
        console.error("Error updating document", error);
    }
};

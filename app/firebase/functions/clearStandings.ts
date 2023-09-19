import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../config";

export const clearStandings = async () => {
    try {
        const standingsSnapshot = await getDocs(collection(db, "standings"));

        if (standingsSnapshot.size === 0) return;

        standingsSnapshot.forEach(async (standingsDoc) => {
            const ref = doc(db, "standings", standingsDoc.id);

            await updateDoc(ref, {
                wins: 0,
                losses: 0,
                ot_losses: 0,
                points: 0,
            });
        });
    } catch (error) {
        console.error("There has been an error updating documents", error);
    }
};

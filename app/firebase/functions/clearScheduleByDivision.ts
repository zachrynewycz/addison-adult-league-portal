import { collection, deleteDoc, doc, getDocs, where, query } from "firebase/firestore";
import { db } from "../config";

export const clearScheduleByDivision = async (selectedDivision: number) => {
    try {
        const q = query(collection(db, "schedule"), where("division", "==", selectedDivision));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (document) => {
            const docRef = doc(db, "schedule", document.id);
            await deleteDoc(docRef);
        });
    } catch (error) {
        console.error("There has been an issue clearing the schedule", error);
    }
};

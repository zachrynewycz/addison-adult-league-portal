import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

export const isAdmin = async (uid: string): Promise<boolean> => {
    try {
        const ref = doc(db, "admin", "authenticated_uids");
        const adminDoc = await getDoc(ref);

        if (adminDoc.exists()) {
            const authenticatedUid: string = adminDoc.data().addison_ice_uid;
            return authenticatedUid === uid;
        }

        return false;
    } catch (error) {
        console.error("Error checking admin status:", error);
        return false;
    }
};

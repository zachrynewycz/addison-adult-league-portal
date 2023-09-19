import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "../config";

export const isAdmin = async (uid: string) => {
    try {
        const adminDoc = await getDoc(doc(db, "admins", "authenticated_uids"));

        if (!adminDoc.exists() || adminDoc.data().addison_ice_uid !== uid) {
            await signOut(auth);
        }
    } catch (error) {
        console.error("Error checking admin status:", error);
    }
};

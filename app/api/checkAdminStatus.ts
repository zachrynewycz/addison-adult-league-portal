import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { uid } = req.query;

    try {
        const adminDoc = await getDoc(doc(db, "admins", "authenticated_uids"));

        if (!adminDoc.exists() || adminDoc.data().addison_ice_uid !== uid) {
            await signOut(auth);
        }

        res.status(204).end();
    } catch (error) {
        console.error("Error checking admin status:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

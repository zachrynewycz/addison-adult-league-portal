"use client";
import { auth } from "@/app/firebase/config";
import { isAdmin } from "@/app/firebase/functions/isAdmin";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginButton = () => {
    const [user] = useAuthState(auth);

    const handleLogin = async () => {
        try {
            if (user) {
                await signOut(auth);
            }

            const provider = new GoogleAuthProvider();
            await signInWithRedirect(auth, provider);

            //Check if user is an admin
            console.log(user);
            // const admin = await isAdmin(user?.currentUser?.uid);
            // if (!admin) {
            //     await signOut(auth);
            // }
        } catch (error) {
            console.error("There has been an issue authenticating", error);
        }
    };

    return (
        <button className="absolute top-4 right-10 text-neutral-500" onClick={handleLogin}>
            {user ? "Logout" : "Login"}
        </button>
    );
};

export default LoginButton;

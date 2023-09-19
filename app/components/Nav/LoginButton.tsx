"use client";
import { auth } from "@/app/firebase/config";
import { isAdmin } from "@/app/firebase/functions/isAdmin";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const LoginButton = () => {
    const [user] = useAuthState(auth);

    useEffect(() => {
        const checkAdmin = async () => {
            if (user) await isAdmin(user.uid);
        };
        checkAdmin();
    }, [user]);

    const handleLogin = async () => {
        try {
            if (user) {
                await signOut(auth);
                return;
            }

            const provider = new GoogleAuthProvider();
            await signInWithRedirect(auth, provider);
        } catch (error) {
            console.error("There has been an issue authenticating", error);
        }
    };

    return (
        <button className="absolute top-4 right-10 text-neutral-500 font-calibre_regular" onClick={handleLogin}>
            {user ? "Logout" : "Login"}
        </button>
    );
};

export default LoginButton;

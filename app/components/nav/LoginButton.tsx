import { auth } from "@/app/firebase/config";
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
        } catch (error) {
            console.error("There has been an issue authenticating you", error);
        }
    };

    return (
        <button className="absolute top-4 right-10 text-neutral-500" onClick={handleLogin}>
            {user ? "Logout" : "Login"}
        </button>
    );
};

export default LoginButton;

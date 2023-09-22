import { auth } from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
    // const [user] = useAuthState(auth);

    // if (!user) return null;

    return <div>{children}</div>;
};

export default AuthCheck;

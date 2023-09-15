import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBmfLKhiH7tlPrw7U8vFWBrnh4HJktzvg",
    authDomain: "addison-mens-league-portal.firebaseapp.com",
    projectId: "addison-mens-league-portal",
    storageBucket: "addison-mens-league-portal.appspot.com",
    messagingSenderId: "344259104292",
    appId: "1:344259104292:web:88df0e7a7f024ea1b952b1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

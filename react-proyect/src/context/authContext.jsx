import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from '../firebase/config'


export const authContext = createContext()

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => signOut(auth).then(() => console.log('sign out succesful', {auth}))

    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log({ currentUser });
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubuscribe();
    }, []);



    return (
        <authContext.Provider value={{
            signup,
            login,
            user,
            logOut,
            loading,
            loginWithGoogle,
            resetPassword,
            }}>
            {children}
        </authContext.Provider>
    )
}

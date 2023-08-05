import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config'
export const authContext = createContext()

export function AuthProvider ({children}) {

    const signup = (email, password) => (console.log(email, password),  createUserWithEmailAndPassword(auth, email, password))
    return(
        <authContext.Provider value={{signup}}>
            {children}
        </authContext.Provider>
    )
}

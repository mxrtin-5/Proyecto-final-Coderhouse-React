import { createContext } from "react";


export const authContext = createContext()

export function AuthProvider ({children}) {

    const singup = (email, password) =>{
        console.log(email, password);
    }

    return(
        <authContext.Provider value={{singup}}>
            {children}
        </authContext.Provider>
    )
}

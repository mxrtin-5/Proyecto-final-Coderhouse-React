import { useContext } from "react"



export const useAuth = () =>{

    const createContext = useContext(authContext)

    if(!createContext){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return createContext
}

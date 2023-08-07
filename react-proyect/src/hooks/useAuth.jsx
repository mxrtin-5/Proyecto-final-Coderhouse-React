import { useContext } from "react"
import { authContext } from "../context/authContext"



export const useAuth = () =>{

    const createContext = useContext(authContext)

    if(!createContext){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return createContext
}

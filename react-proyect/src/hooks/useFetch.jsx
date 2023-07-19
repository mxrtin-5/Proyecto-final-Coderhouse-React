import { useEffect, useState } from "react"



export const useFetch = (url, arr = []) =>{

const [data, setData] = useState(null)

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, arr)

    return{ data }

}
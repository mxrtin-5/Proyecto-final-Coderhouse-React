import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/PedirDatos"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetailContainer = () =>{

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    console.log(itemId)

    console.log(item)

    
    useEffect(()=>{
        setLoading(true)

        pedirDatos()
        .then(r=>{
            setItem(r.find(prod => prod.id ===Number(itemId)) ) 
        })
        .finally(() => setLoading(false))
    }, [itemId])

    return(
        <div className="container my-5">
            {
                loading
                    ?<h2>Cargando...</h2>
                    : <ItemDetail {...item}/>
            }

        </div>
    )
}
import { useContext } from "react"
import { useProductos } from "../../hooks/useProductos"
import { CartContext } from "../../context/CartContext"




export const Contacto = () =>{
    const contexto = useContext(CartContext)

    const { productos } = useProductos()

    return(
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr />
        </div>
    )
}
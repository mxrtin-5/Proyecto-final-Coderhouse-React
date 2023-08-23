import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import './CartView.css'


export const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    return (
        <div className="container-cart">
            <h2 className="text-compra text-4xl">Tu compra</h2>
            <hr/>
            <div className="container-imgs">
                {
                    cart.map((item) => (
                        <div className="datos-prods" key={item.id}>
                            <h3>{item.name}</h3>
                            <img className="imagen-detail-prods" src={item.img} alt={item.name}/>
                            <p className="p-detail-compra">Precio: ${item.price * item.counter}</p>
                            <p className="p-detail-compra">Cantidad: {item.counter}</p>
                            <button onClick={() => removerDelCarrito(item.id)} className="btn btn-danger"><FaTrashAlt/></button>
                            <hr/>
                        </div>
                    ))
                }
            </div>

            

            
        </div>
    )
}


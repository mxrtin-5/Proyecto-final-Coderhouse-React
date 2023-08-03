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

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.img} alt={item.name}/>
                        <p>Precio: ${item.price * item.counter}</p>
                        <p>Cantidad: {item.counter}</p>
                        <button onClick={() => removerDelCarrito(item.id)} className="btn btn-danger"><FaTrashAlt/></button>
                        <hr/>
                    </div>
                ))
            }

            <div className="seccion-teminar-compra">
                <h4 className="text-total-cart text-3xl my-2">Total: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito} className="btn btn-vaciar-cart">Vaciar carrito</button>
                <button><Link className="btn btn-terminar-compra-cart" to={'/checkout'}> Terminar mi compra </Link></button>
            </div>
        </div>
    )
}


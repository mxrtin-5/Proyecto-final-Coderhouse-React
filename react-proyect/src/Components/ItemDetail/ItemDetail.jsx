import { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'




export const ItemDetail = ({item}) =>{

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    console.log(isInCart(item.id))

    const [counter, setCounter] = useState(1)

    const handleAgregar = () =>{
        const newItem = {
            ...item,
            counter
        }

        agregarAlCarrito(newItem)
    }


    return(
        <div className="container my-5">
            <h2>{item.name}</h2>
            <img className='imagen' src={item.img} alt={item.name} />
            <p className='p-detail'>Precio: ${item.price}</p>


            {
                isInCart (item.id)
                ? <button className='btn-terminar'><Link className='btn-terminar-compra' to="/cart">Terminar mi compra</Link></button>
                :<ItemCount max={item.stock}
                counter={counter}
                setCounter={setCounter}
                agregar={handleAgregar}
                />
            }
            
        </div>
    )
}
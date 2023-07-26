import { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'



export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div className='icono'>
            <Link to="/cart" className='text-white text-3xl cursor-pointer flex gap-1'>
                <FaShoppingCart/>
                <span className='span-icon'>{totalCantidad()}</span>
            </Link>
        </div>
    )
}

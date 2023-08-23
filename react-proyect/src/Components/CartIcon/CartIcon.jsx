import { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import './CartIcon.css'



const CartIcon = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div className='icono'>
            <FaShoppingCart />
            <span className='span-icon'>{totalCantidad()}</span>
        </div>
    );
}

export default CartIcon;
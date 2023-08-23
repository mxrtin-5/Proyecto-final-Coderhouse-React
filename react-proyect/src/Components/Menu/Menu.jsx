import { MenuList } from './MenuList'
import { useContext, useState } from 'react'
import { CartContext } from "../../context/CartContext"
import { UserWidget } from '../UserWidget/UserWidget'
import './Menu.css'
import CartIcon from '../CartIcon/CartIcon'


export const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [active, setActive] = useState(false)

    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    const handleClose = () => {
        setShowMenu(false)
    }

    return (
        <div className={showMenu ? "menu-active" : ""}>


            <div className='menu__backdrop' onClick={handleClose}>


                <MenuList close={handleClose} />

                <UserWidget />


                <div onClick={() => setActive(!active)} className='cart-widget-container'>
                    <CartIcon />
                </div>

            </div>



        </div>


    )
}
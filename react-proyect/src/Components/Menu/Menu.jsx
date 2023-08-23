import { MenuList } from './MenuList'
import { useState } from 'react'
import './Menu.css'
import CartIcon from '../CartIcon/CartIcon'
import { CartView } from '../CartView/CartView'


export const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [active, setActive] = useState(false)


    const handleClose = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className={showMenu ? "menu-active" : ""}>


            <div className='menu__backdrop' onClick={handleClose}>


                <MenuList close={handleClose} />

                <div onClick={() => setActive(!active)} className='cart-widget-container'>
                    <CartIcon />
                </div>

                {active && <CartView />}

            </div>



        </div>


    )
}
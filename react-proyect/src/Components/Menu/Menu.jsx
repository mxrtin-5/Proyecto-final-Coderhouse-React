import { MenuList } from './MenuList'
import { useState } from 'react'
import './Menu.css'
import CartIcon from '../CartIcon/CartIcon'
import { CartView } from '../CartView/CartView'


export const Menu = ({ isOpen, onClose }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [active, setActive] = useState(false)


    const handleClose = () => {
        setShowMenu(!showMenu)
        setActive(!active)
    }

    return (
        <div>
            <div >


                <div className='menu__backdrop'>

                    <MenuList onClick={handleClose} close={onClose} />

                </div>

            </div>

                <div onClick={() => setActive(!active)} className='cart-widget-container'>
                    <CartIcon />

                    {active && <CartView />}
                </div>
        </div>



    )
}
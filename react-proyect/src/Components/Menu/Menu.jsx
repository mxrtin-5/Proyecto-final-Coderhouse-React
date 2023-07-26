import { BiMenu } from 'react-icons/bi'
import './Menu.css'
import { MenuList } from './MenuList'
import { useState} from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleOpen = () => {
        setShowMenu(true)
    }

    const handleClose = () => {
        setShowMenu(false)
    }

    return (
        <div className={showMenu ? "menu-active" : ""}> 
            <div>
                <BiMenu onClick={handleOpen} className='menu-icon'/>
                <div className='cart-widget-container'>
                    <CartWidget className='cart-widget'/>
                </div>
                
            </div>
    
            <div className='menu__backdrop' onClick={handleClose}>
                <MenuList close={handleClose}/>
                
            </div>
        </div>
    )
}
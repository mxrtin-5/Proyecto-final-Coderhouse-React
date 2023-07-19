import { BiMenu } from 'react-icons/bi'
import './Menu.css'
import { MenuList } from './MenuList'
import { useState} from 'react'

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
                <BiMenu onClick={handleOpen} className='menu-icon text-white text-4xl cursor-pointer'/>
            </div>
    
            <div className='menu__backdrop' onClick={handleClose}>
                <MenuList close={handleClose}/>
            </div>
        </div>
    )
}
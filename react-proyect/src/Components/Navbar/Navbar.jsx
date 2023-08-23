import { useState } from 'react'
import { Menu } from '../Menu/Menu'
import './Navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    return(

        <header className='header-header'>
            <div className='header_container'>
                <h2 className='title'> <Link className='title-content' to={'/'}>AceleraBearings</Link> </h2>
                
                <Menu isOpen={isMenuOpen} onClose={handleMenuToggle} />
            </div>  
        </header>

        
    )
}
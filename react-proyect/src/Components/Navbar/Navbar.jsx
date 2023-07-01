import './Navbar.css'
import { useState } from 'react'

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <header>
            <nav className='navbar'>

                <h2 className='title'>AtomicMoonlight</h2>

                <ul>
                    <li className='li active'><a href="#"></a>Home</li>
                    <li className='li'><a href="#">Services</a></li>
                    <li className='li'><a href="#">Sexshop</a></li>
                    <li className='li'><a href="#">About</a></li>
                    <li className='li'><a href="#">Contact</a></li>
                </ul>

            </nav>

        </header>

    )
}
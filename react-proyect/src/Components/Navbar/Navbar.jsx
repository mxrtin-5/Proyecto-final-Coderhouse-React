import './Navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'




export const Navbar = () => {


    return (

        <header>
            <nav className='navbar'>

                <h2 className='title'>AtomicMoonlight</h2>

                <ul>
                    <li className='li active'><a href="#"></a>Home</li>
                    <li className='li'><a href="#">Services</a></li>
                    <li className='li'><a href="#">Products</a></li>
                    <li className='li'><a href="#">About</a></li>
                    <li className='li'><a href="#">Contact</a></li>
                </ul>

                <CartWidget/>

            </nav>

        </header>

    )
}
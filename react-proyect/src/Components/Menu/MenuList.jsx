import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import { BiMenu } from 'react-icons/bi'
import './Menu.css'


export const MenuList = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const handleCloseMenu = () => {
        navRef.current.classList.remove("responsive_nav");
    };


    return (
        <div>

            <nav ref={navRef} onClick={handleCloseMenu} className="menulist">

                <ul className='menulist-items'>
                    <li>
                        <Link onClick={showNavbar} className="menulist__link active" to="/">Inicio</Link>
                    </li>

                    <li>
                        <Link onClick={showNavbar} className="menulist__link" to="/productos/rodillos">Rodillos</Link>
                    </li>

                    <li>
                        <Link onClick={showNavbar} className="menulist__link" to="/productos/combinados">Combinados</Link>
                    </li>

                    <li>
                        <Link onClick={showNavbar} className="menulist__link" to="/productos/lineales">Lineales</Link>
                    </li>

                    <li>
                        <Link onClick={showNavbar} className="menulist__link" to="/productos/manguitos">Manguitos</Link>
                    </li>

                    <li><Link onClick={showNavbar} className="menulist__link" to="/productos/hileras-de-bolas">Bolas</Link></li>

                    <li><Link onClick={showNavbar} className="menulist__link" to="/productos/agujas">Agujas</Link></li>

                    <li><Link onClick={showNavbar} className="menulist__link" to="/productos/otros">Otros</Link></li>

                    <li><Link onClick={showNavbar} className="menulist__link" to="/contacto">Contacto</Link></li>
                </ul>


                <button
                    className="nav-btn nav-close-btn"
                    onClick={handleCloseMenu}>
                    <FaTimes />
                </button>
            </nav>

            <button
                className="nav-btn menu-btn"
                onClick={showNavbar}>
                <BiMenu />
            </button>

        </div>
    )
}
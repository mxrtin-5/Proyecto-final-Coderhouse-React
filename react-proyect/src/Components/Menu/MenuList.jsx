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
        close()
    };


    return (
        <div>

            <nav ref={navRef} onClick={handleCloseMenu} className="menulist">

                <Link onClick={showNavbar} className="menulist__link active" to="/">Inicio</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/hileras-de-bolas">Hilera de bolas</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/manguitos">Manguito</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/combinados">Combinados</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/agujas">Agujas</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/productos/rodillos">Rodillo</Link>
                <Link onClick={showNavbar} className="menulist__link" to="/contacto">Contacto</Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={handleCloseMenu}>
                    <FaTimes />
                </button>
            </nav>

            <button
                className="nav-btn"
                onClick={showNavbar}>
                <BiMenu />
            </button>

        </div>
    )
}
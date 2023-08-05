import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import { BiMenu } from 'react-icons/bi'
import './Menu.css'


export const MenuList = () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


    return (
        <div>

        <nav ref={navRef} onClick={(e) => e.stopPropagation()}  className="menulist">
            
            <Link onClick={showNavbar} className="menulist__link active" to="/">Inicio</Link>
            <Link onClick={showNavbar} className="menulist__link" to="/productos/verduleria">Verduleria</Link>
            <Link onClick={showNavbar} className="menulist__link" to="/productos/perfumeria">Perfumeria</Link>
            <Link onClick={showNavbar} className="menulist__link" to="/productos/carniceria">Carniceria</Link>
            <Link onClick={showNavbar} className="menulist__link" to="/productos/panaderia">Panaderia</Link>
            <Link onClick={showNavbar} className="menulist__link" to="/contacto">Contacto</Link>
            <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
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
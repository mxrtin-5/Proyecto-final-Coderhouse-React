import './Footer.css'
import { Link } from'react-router-dom'
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";


export const Footer = () =>{


    return(
        <footer className='footer'>
            <div className='categories'>
                    <h4>Categorias</h4>
                    <Link className='categorias' to={'/'}><p>Inicio</p></Link>
                    <Link  className='categorias'to='/productos/rodillos'><p >Rodillos</p></Link>
                    <Link  className='categorias'to='/productos/combinados'><p >Combinados</p></Link>
                    <Link  className='categorias'to='/productos/lineales'><p >Lineales</p></Link>
                    <Link  className='categorias'to='/productos/manguitos'><p >Manguito</p></Link>
                    <Link  className='categorias'to='/productos/hileras-de-bolas'><p>Bolas</p></Link>
                    <Link  className='categorias'to='/productos/agujas'><p >Agujas</p></Link>
                    <Link className='categorias' to={'/contacto'}><p>Contacto</p></Link>
                    
                </div>

            <div className='contactanos'>
                <h4>Contactanos</h4>
                <div className='contenedor-contactanos'>
                    <p className='p-icono'><SiWhatsapp className='icon' /> +541121877162</p>
                    <p className='p-icono'> <BsTelephoneFill className='icon' />+541121877162</p>
                    <p className='p-icono'> <BiLogoGmail className='icon' />contacto@acelerabearings.com</p>
                </div>
                
            </div>

            <div className='conectados'>
                <h4>Sigamos conectados</h4>
                <div className='contenedor-conectados'>
                    <div className='container-facebook'>
                        <Link className='iconos-facebook-ig' to={'https://www.facebook.com/profile.php?id=61553724200851'}><FaFacebook/></Link>
                        <Link className='iconos-facebook-ig' to={'https://www.instagram.com/acelerabearings/'}><BiLogoInstagram/></Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}
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
                    <Link  className='categorias'to='/productos/hileras-de-bolas'><p>Hilera de bolas</p></Link>
                    <Link  className='categorias'to='/productos/manguitos'><p >Manguito</p></Link>
                    <Link  className='categorias'to='/productos/combinados'><p >Combinados</p></Link>
                    <Link  className='categorias'to='/productos/agujas'><p >Agujas</p></Link>
                    <Link  className='categorias'to='/productos/rodillos'><p >Rodillo</p></Link>
                    <Link className='categorias' to={'/contacto'}><p>Contacto</p></Link>
                    
                </div>

            <div className='contactanos'>
                <h4>Contactanos</h4>
                <div className='contenedor-contactanos'>
                    <p className='p-icono'><SiWhatsapp className='icon' /> 548113917</p>
                    <p className='p-icono'> <BsTelephoneFill className='icon' />548113917</p>
                    <p className='p-icono'> <BiLogoGmail className='icon' />ejemplo@gmail.com</p>
                </div>
                
            </div>

            <div className='conectados'>
                <h4>Sigamos conectados</h4>
                <div className='contenedor-conectados'>
                    <div className='container-facebook'>
                        <Link className='iconos-facebook-ig' to={'https://www.facebook.com/Mxrt1n5/'}><FaFacebook/></Link>
                        <Link className='iconos-facebook-ig' to={'https://www.instagram.com/mxrtin_5._/?hl=es'}><BiLogoInstagram/></Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}
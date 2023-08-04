import { Contacto } from '../Contacto/Contacto'
import './Footer.css'
import { Link } from'react-router-dom'


export const Footer = () =>{


    return(
        <footer className='footer'>
            <div className='categories'>
                    <h4>Categorias</h4>
                    <Link to={'/'}><p>Inicio</p></Link>
                    <Link to={'/contacto'}><p>Contacto</p></Link>
                    <Link><p>Talleres</p></Link>
                    
                </div>

            <div className='contactanos'>
                <h4>Contactanos</h4>
                <p>wpp</p>
                <p>num</p>
                <p>mail</p>
            </div>

            <div className='conectados'>
                <h4>Sigamos conectados</h4>
                <p>link a ig</p>
                <p>link a facebook</p>
            </div>

        </footer>
    )
}
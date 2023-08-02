import { MdAttachMoney } from "react-icons/md"
import { AiFillCreditCard } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import './Caracteristicas.css'




export const Caracteristicas = () =>{


    return(
        <div className="div-icon-container">
            <div className="div-icon-money">
                <MdAttachMoney className="icon-money"/>
                <div>
                    <h2>20% OFF Abonando en Efectivo</h2>
                    <p>Motoenvio o Retiro por taller</p>
                </div>
            </div>
            <div className="div-icon-card">
                <AiFillCreditCard className="icon-card"/>
                <div>
                    <h2>AHORA 3</h2>
                    <p>3 Cuotas sin interes con tarjetas de Mercadopago</p>
                </div>
                
            </div>
            <div className="div-icon-shipping">
                <FaShippingFast className="icon-shipping"/>
                <div>
                    <h2>Envíos Gratis todo el PAIS</h2>
                    <p>Superando los $25000</p>
                </div>
                
            </div>
        </div>
    )
}


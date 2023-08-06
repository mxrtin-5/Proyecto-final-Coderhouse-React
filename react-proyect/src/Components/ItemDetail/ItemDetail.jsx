import { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'





export const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [counter, setCounter] = useState(1)

    const mySwal = withReactContent(Swal)

    const handleAgregar = (counter) => {
        const newItem = {
            ...item,
            counter
        }

        agregarAlCarrito(newItem)
    }


    return (
        <div className="container my-5">
            <h2>{item.name}</h2>
            <img className='imagen' src={item.img} alt={item.name} />
            <p className='p-detail'>Precio: ${item.price}</p>


            {
                isInCart(item.id) ?
                <div>                        
                    <button                  
                    onClick={mySwal.fire({   
                        title: <strong>Articulo agregado</strong>,
                        html: <i>El articulo se agrego correctamente al carrito</i>,
                        icon: 'success'
                    })}
                    className='btn-terminar'>
                </button>
                <Link className='btn-terminar-compra' to="/cart" >
                        Terminar mi compra
                    </Link>
                </div>                                
    : <ItemCount max={item.stock}
        initial={1} 
        agregar={handleAgregar}
    />
}

        </div >
    )
}
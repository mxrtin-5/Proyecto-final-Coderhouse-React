import { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'
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
        };

        if(!isInCart(item.id)){
            agregarAlCarrito(newItem)
        }else{
            mySwal.fire({
                icon: 'warning',
                title: 'Producto ya en el carrito',
                text: 'Este producto ya ha sido agregado al carrito.',
                confirmButtonText: 'Ok',
            });
        }
    }


    return (
        <div className="container my-5">
            <h2>{item.name}</h2>
            <img className='imagen' src={item.img} alt={item.name} />


            <ItemCount max={item.stock}
                        initial={1}
                        setCounter={setCounter}
                        counter={counter}
                        agregar={handleAgregar}
                    />
            

        </div >
    )
}
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config'
import {Link, Navigate} from 'react-router-dom'

export const Checkout = () =>{

    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) =>{
        console.log(e.target.name);

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submit');
        console.log(values);

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.price, cantidad: item.counter, nombre: item.name})),
            total: totalCompra(),
            fyh: new Date()
        }

        console.log(orden)

        //enviarlo a firebase

        orden.items.forEach(item => {
            const docRef = doc(db, "productos", item.id)
            getDoc(docRef)
                .then((doc) => {
                    
                    const stock = doc.data().stock

                    if (stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: stock - item.cantidad
                        })
                    } else {
                        
                        alert("No hay stock de " + item.nombre)
                    }

                })

        })
        
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2 className="text-4xl">Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>

                <Link to="/"><button className="btn btn-danger">Volver</button></Link>
            </div>
        )
    }

    if (cart.length === 0){
        return(
            <Navigate to='/'/>
        )
    }


    return(
        <div>
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.nombre}
                    type="text"
                    className="form-control my-2"
                    placeholder="Nombre"
                    name="nombre"
                    />
                <input
                    onChange={handleInputChange}
                    value={values.direccion}
                    type="text"
                    className="form-control my-4"
                    placeholder="Direccion"
                    name="direccion"
                    />
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type="email"
                    className="form-control my-2"
                    placeholder="Tu email"
                    name="email"
                    />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}
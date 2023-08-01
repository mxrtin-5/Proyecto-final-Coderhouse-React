import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"



export const Checkout = () =>{

    const { cart, totalCompra } = useContext(CartContext)

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

        const orden ={
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.price, cantidad:item.cantidad, nombre:item.nombre})),
            total: totalCompra(),
            FyH: new Date
        }

        console.log(orden)

        //enviarlo a firebase
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
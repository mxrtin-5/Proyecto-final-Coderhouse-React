import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import './CartView.css'


export const CartView = () => {
    const { cart, removerDelCarrito, vaciarCarrito } = useContext(CartContext)

    const generateWhatsAppLink = (cart) => {
        const phoneNumber = '+5491121877162'; // Replace with your WhatsApp phone number
        const productsMessage = generateProductsMessage(cart);
        const encodedMessage = encodeURIComponent(productsMessage);
        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    };

    const generateProductsMessage = (cart) => {
        const productLines = cart.map((product) => {
            return `${product.name} - Cantidad: ${product.counter}`;
        });
        return `Hola, estoy interesado en los siguientes productos: ${productLines.join(' ')}`;
    };

    return (
        <div className='container-cart-products'>
            <h2>Carrito de Compra</h2>
            <div className='cart-products'>
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    cart.map((product) => (
                        <div key={product.id} className='cart-product'>
                            <img src={product.img} alt={product.name} className='product-image' />
                            <div className='info-cart-product'>
                                <div className='titulo-producto-carrito'>{product.name}</div>
                                <div className='precio-producto-carrito'>${product.price}</div>
                                <div className='cantidad-producto-carrito'>{product.counter}</div>
                            </div>
                            <div className='icon-close' >
                                <FaTrashAlt onClick={() => removerDelCarrito(product.id)} />
                            </div>
                        </div>
                    ))
                )}
                {cart.length > 0 && (
                    <div className='cart-total'>
                        <button onClick={vaciarCarrito} className='btn-terminar-compra-cart'> <a target='_blank' href={generateWhatsAppLink(cart)}>Terminar Compra</a> </button>
                    </div>
                )}

            </div>


        </div>
    )
}


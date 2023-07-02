import shoppingCart from '../../assets/shopping-cart.svg'
import './CartWidget.css'


export const CartWidget = () =>{
    return(

        <div className='div-cart'>
            <img className='cart' src={shoppingCart} alt="" />
            <p>1</p>
        </div>

    )
}
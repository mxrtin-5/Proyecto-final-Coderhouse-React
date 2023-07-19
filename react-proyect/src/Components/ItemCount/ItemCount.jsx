import { useState } from 'react';
import './ItemCount.css'


export const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount] = useState(initial)

    const restar = () =>{
        if (count > 0){
            setCount(count -1)
        }
    };

    const sumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    };


    return(
        <>
            <div className='container-count'>
                <button className="btn-item-count" onClick={restar}>
                    <p className='p-minus'>-</p>
                </button>

                <span className="span"> {count} </span>

                <button className="btn-item-count" onClick={sumar}>
                    <p className='p-plus'>+</p>
                </button>

            </div>

            <button className="btn-item-compra" disabled={count === 0 || stock === 0} onClick={() => onAdd(count)}>
                <h2 className='comprar-btn'>Comprar</h2>
            </button>


        </>
        
    )
}
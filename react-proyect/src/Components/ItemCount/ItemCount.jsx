import { clases } from "../../helpers/utils"
import './itemCount.css'


export const ItemCount = ({max, counter, setCounter, agregar}) =>{

    

    const handleRestar = () =>{
        counter > 1 && setCounter(counter - 1)
    }

    const handleSumar = () =>{
        counter < max && setCounter( counter + 1)
    }


    return(

        <div>
            <button onClick={handleRestar} className={`btn mx-2 ${counter === 1 ? "btn btn-outline-danger" : "btn-quantity"}`} disabled={counter === 1}>-</button>
                <span className="mx-2">{counter}</span>
                <button onClick={handleSumar} className={clases(
            'btn',
            'mx-2',
            counter === max ? 'btn-outline-danger' : 'btn-plus'
            )}
            disabled={counter === max}
                >+</button> 
            <br />
            <button onClick={agregar} className="btn-finalizar">Agregar</button>
        </div>
    )
}
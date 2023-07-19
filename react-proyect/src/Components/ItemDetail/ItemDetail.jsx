import { ItemCount } from "../ItemCount/ItemCount"
import './ItemDetail.css'




export const ItemDetail = (item) =>{

    const {name, descripcion, price, stock, img, id} = item;

    const onAdd = (cantidad) =>{
        alert(`Compraste ${cantidad} items`)
    }

    return(
        <div className="container my-5">
            <h2 className="title-detail-prod">{name}</h2>
            <img className="img-detail" src={img} alt={name} />
            <p className="descripcion-item">{descripcion}</p>
            <p className="price-item">Precio: ${price}</p>
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </div>
    )
}
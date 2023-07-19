import {Link} from 'react-router-dom'
import './ItemCard.css'


export const ItemCard = ({item}) => {
    return (
        <div key={item.id} className='container-prod flex-row'>
            <div className='container'>
                <h4 className='title-prod'>{item.name}</h4>
                <img className='imagen' src={item.img} alt="" />
                <p>{item.descripcion}</p>
                <p>${item.price}</p>
                <button className='btn-prod'><Link className="btn btn-primary" to={`/detail/${item.id}`}>Ver detalles</Link></button>
            </div>

        </div>
    )
}
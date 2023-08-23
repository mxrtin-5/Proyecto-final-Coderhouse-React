import { Link } from 'react-router-dom'
import './ItemCard.css'


export const ItemCard = ({ item }) => {

    return (
        <div key={item.id} className='container-prod flex-row'>
            <div className=' container-productos container'>
                <h4 className='title-prod'>{item.name}</h4>
                <img className='imagen' src={item.img} alt="" />
                <p>{item.descripcion}</p>
                <Link className='btn' to={`/detail/${item.id}`}><button className='btn-prod'>Ver detalles</button></Link>
            </div>

        </div>
    )
}
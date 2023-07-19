import {Link} from 'react-router-dom'

export const ItemCard = ({item}) => {
    return (
        <div key={item.id} className='flex-row'>
            <h4>{item.nombre}</h4>
            <img className='imagen' src={item.img} alt="" />
            <p>{item.descripcion}</p>
            <p>${item.price}</p>
            <Link className="btn btn-primary" to={`/detail/${item.id}`}>Agregar al carrito</Link>
        </div>
    )
}
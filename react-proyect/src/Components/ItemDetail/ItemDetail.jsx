



export const ItemDetail = ({item}) =>{


    return(
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} />
            <p>Precio: ${item.price}</p>
            <button className="btn-detail">Agregar al carrito</button>
        </div>
    )
}
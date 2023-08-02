import { ItemCard } from "../ItemCard/ItemCard"
import './ItemList.css'


export const ItemList = ({productos}) => {


    return (

        <div>

            <h2 className="titulo-principal">Destacados</h2>

            <div className='container-prods flex-wrap justify-center gap-8'>
                {
                    productos.map((el) => <ItemCard key={el.id} item={el}/>)
                }
            </div>
        </div>
    )
}
import { ItemCard } from "../ItemCard/ItemCard"


export const ItemList = ({productos}) => {


    return (

        <div>

            <div className='flex flex-row flex-wrap justify-center gap-2'>
                {
                    productos.map((el) => <ItemCard key={el.id} item={el}/>)
                }
            </div>
        </div>
    )
}
import { ItemCard } from "../ItemCard/ItemCard"


export const ItemList = ({productos}) => {


    return (

        <div className="container">

            <div className='flex flex-row flex-wrap justify-center gap-2'>
                {
                    productos.map((el) => <ItemCard item={el}/>)
                }
            </div>
        </div>
    )
}
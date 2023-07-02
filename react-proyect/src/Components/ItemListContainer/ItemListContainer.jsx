import './ItemListContainer.css'



export const ItemListContainer = ({greeting}) =>{
    return(

        <section className='container-greeting'>
            <h1 className='greeting'>{greeting}</h1>
        </section>
    )
}
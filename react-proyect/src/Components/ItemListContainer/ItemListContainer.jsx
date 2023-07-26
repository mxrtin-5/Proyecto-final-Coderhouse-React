import { pedirDatos } from '../../helpers/PedirDatos'
import { useState } from 'react'
import { useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'




export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
        .then(r=> {
            if(categoryId){
                setProductos( r.filter(prod => prod.category === categoryId) )
            }else{
                setProductos(r)
            }
            
        })
        .catch(e => console.log(e))
        .finally(()=>{
            setLoading(false)
        })
    }, [categoryId]);

    return (

        <section className='container'>
            {
                loading 
                    ? <Loader />
                    : <ItemList productos={productos}/>
            }
        </section>
    )
}
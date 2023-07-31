import { useState } from 'react'
import { useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../firebase/config'




export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        //1- armar la referencia
        const productosRef = collection(db, 'productos')
        const q =categoryId
                ? query(productosRef, where('category', '==', categoryId))
                : productosRef

        //2- llamar a esa ref
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) =>{
                    return{
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                console.log(docs)
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [categoryId]);

    return (

        <section>
            {
                loading 
                    ? <Loader />
                    : <ItemList productos={productos}/>
            }
        </section>
    )
}
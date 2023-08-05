import { useState } from 'react'
import { useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Presentation } from '../Presentation/Presentation'
import { Caracteristicas } from '../Caracteristicas/Caracteristicas'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './ItemListContainer.css'


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    const mySwal = withReactContent(Swal)

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
                setProductos(docs)
            })
            .catch((error)=>{
                    mySwal.fire({
                        title: <strong>Error</strong>,
                        html: <i>Ocurrio un error {error}</i>,
                        icon: 'error'
                    })
                })
            .finally(() => setLoading(false))
    }, [categoryId]);

    return (

        <section>
            <Presentation/>
            <Caracteristicas/>
            {
                loading 
                    ? <Loader />
                    : <ItemList productos={productos}/>
            }
        </section>
    )
}
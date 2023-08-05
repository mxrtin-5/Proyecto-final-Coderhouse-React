import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from "../Loader/Loader"
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../../firebase/config"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export const ItemDetailContainer = () =>{

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    const mySwal = withReactContent(Swal)


    useEffect(()=>{
        setLoading(true)

        //1- armar la ref
        const itemRef = doc(db, 'productos', itemId)

        //2- llamar a la ref
        getDoc(itemRef)
            .then((doc) =>{
                setItem({
                    id:doc.id,
                    ...doc.data()
                })
            })
            .catch ((error)=>{
                    mySwal.fire({
                        title: <strong>Error</strong>,
                        html: <i>Ocurrio un error {error}</i>,
                        icon: 'error'
                    })
                })
            .finally(() => setLoading(false))
            
    }, [])

    return(
        <div>
            {
                loading
                    ? <Loader/>
                    : <ItemDetail item={item}/>
            }

        </div>
    )
}

const parseText = (string) =>{
    const text = string.split('/n')

    return <p>
        {
            text.map(p =>(
                <>
                {p}<br/>
                </>
            ))
        }
    </p>
}
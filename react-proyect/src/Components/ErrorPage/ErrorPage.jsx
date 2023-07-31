import Error from '../../assets/img1.svg'
import { Link } from 'react-router-dom'
import './ErrorPage.css'

export const ErrorPage = () =>{



    return(
        <div className='container'>
            <img src={Error} />
            <h1>La página que ha solicitado no se encuentra disponible</h1>
            <div>
                <button> <Link className='btn-back' to={'/'}>
                Volver atras
                </Link></button>
            </div>
    </div>
    )
}
import Spinner from 'react-bootstrap/Spinner';
import './Loader.css'


export const Loader = () =>{

    return(
        <div className="loader">
            <Spinner animation="border" variant="primary"/>
        </div>
    )
}
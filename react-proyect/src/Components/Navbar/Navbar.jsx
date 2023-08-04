import { Menu } from '../Menu/Menu'
import './Navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () =>{

    return(

        <header>
            <div className='header_container'>
                <h2 className='title'> <Link className='title-content' to={'/'}>AceleraBearings</Link> </h2>
                
                <Menu />
            </div>  
        </header>

        
    )
}
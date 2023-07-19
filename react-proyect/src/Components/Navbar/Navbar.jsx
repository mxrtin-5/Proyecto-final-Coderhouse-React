import { Menu } from '../Menu/Menu'
import './Navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () =>{

    return(

        <header>
            <div className='header_container'>
                <h2 className='title'> <Link to={'/'}>AtomicMoonlight</Link> </h2>
                
                <Menu />
            </div>  
        </header>

        
    )
}
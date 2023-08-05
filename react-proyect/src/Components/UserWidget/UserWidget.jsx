import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";


export const UserWidget = () =>{

    return(

        <div>
                <Link to="/user" className='text-white text-3xl cursor-pointer flex gap-1'>
                        <BsFillPersonFill className='user-widget'/>
                </Link>
        </div>

    )
}
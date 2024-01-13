
import { Link } from 'react-router-dom';

 
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-elements">    
            <Link className="link" to={{pathname: "/"}}>          
                <div className="btn-link">
                    HOME
                </div>
                </Link>
                <Link className="link" to={{pathname: "/exercises"}}>
                <div className="btn-link">
                        EXERCISES
                </div>
                </Link>
                <Link className="link" to={{pathname: "/workout"}}>
                <div className="btn-link">
                        WORKOUT
                </div>
                </Link>
                <div className="btn-link">
                    <Link className="link" to={{pathname: "/workout"}}>
                        SAVED
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
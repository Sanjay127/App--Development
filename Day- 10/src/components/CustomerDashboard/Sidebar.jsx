import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { logout} from '../redux/UserSlice';
import "./style.css"

const Sidebar = () => {
    
    const navigate = useNavigate() ;
      const dispatch = useDispatch();
      const handleLogout = (e) => {
            e.preventDefault();
            dispatch(logout());
            localStorage.clear();
            navigate("/login");
      }
    
  return (
    <div>
        <nav className='nav-b'>
            <div className="logo-name">
                  <label className="logo">Customer Dashboard</label>
            </div>
            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                              <Link className='link-text' to="/homelog">
                                    <span className='link-name'>Home</span>
                              </Link>
                    </li>
                    <li>
                              <Link className='link-text' to="/customerprofile">
                                    <span className='link-name'>Profile</span>
                              </Link>
                    </li>
                   
                        
                    <li>
                        <Link className='link-text' to="/providerprofile">
                                <span className='link-name'>Service Provider</span>
                        </Link>
                    </li>
                    
                        
                </ul>
                <ul className="logout-mod">
                        <li>
                              <Link className='link-text-logout' onClick={(e) => handleLogout(e)}>
                                    <span className="link-name">Logout</span>
                              </Link>
                        </li>
                  </ul>
            </div>
      </nav>
      
    </div>
  );
}

export default Sidebar;


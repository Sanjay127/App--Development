import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { logout} from '../../redux/UserSlice';
import "./admindash.css"
const SideNav = () => {

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
                  <label className="logo">Admin</label>
            </div>
            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                              <Link className='link-text' to="/admindashboard">
                                    <span className='link-name'>Dashboard</span>
                              </Link>
                    </li>
                    <li>
                              <Link className='link-text' to="/adminservice">
                                    <span className='link-name'>Service</span>
                              </Link>
                    </li>
                    <li>
                        <Link className='link-text' to="/adminprovider">
                                <span className='link-name'>Provider</span>
                        </Link>
                    </li>
                        
                    <li>
                        <Link className='link-text' to="/admincustomer">
                                <span className='link-name'>Customer</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='link-text' to="/adminbooking">
                                <span className='link-name'>Service Booking</span>
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

export default SideNav;

import React from 'react';

import homeimage from "../../assests/home-page.jpg"
import {Link,useNavigate} from 'react-router-dom';
import { selectUser } from '../redux/UserSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/UserSlice';
import Review from '../Review/review';
import FAQ from '../FAQ/Faq';
import Footer from '../Footer/footer';


const Homelog = () => {
    const user = useSelector(selectUser) ;
    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;
    const handleApplication = () => {
        navigate("/category")
    }
    const handleLogout = (e) => {
        e.preventDefault() ;
        
        dispatch(logout()) ;
        localStorage.clear() ;
        navigate("/home") ;
}
  return (
    <div>
        <nav>
        <div className="nav__logo"><Link to="#">MarketPlace</Link></div>
        <ul className="nav__links">
          <li className="link"><Link to="/#">Home</Link></li>
          <li className="link"><Link to="/about">About Us</Link></li>
          <li className="link"><Link to="/providerprofile">Provider</Link></li>
          <li className="link"><Link to="/category">Categories</Link></li>
          <li className="link"><Link to="/contact">Contact</Link></li>
          <label>{user.email}</label>
          <li className="link"><Link onClick={(e) => handleLogout(e)} to="/login" className="nav__btn">LOGOUT</Link></li>
        </ul>
    </nav>
    <section className="container-home">
      <div className="content__container">
        <h1>
          
          <span className="heading__1">Electronic Service</span><br />
         
        </h1>
        <p>
          Unlock your Services with our intuitative platform . Seamlessly blending technology, we provide an
          immersive services that combines service provider with services, and payments.
        </p>
        <button className="login-btn" onClick={handleApplication}>Book Service</button>
      </div>
      <div className="image__container">
        <img src={homeimage} alt="home" />
        
        
      </div>
    </section>
    <Review/>
    <FAQ/>
    <Footer/>
    </div>
   
  )
}

export default Homelog;

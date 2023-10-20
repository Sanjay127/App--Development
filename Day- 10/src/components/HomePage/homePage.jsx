import React from 'react';
import "./homePage.css"
import homeimage from "../../assests/home-page.jpg"
import {Link,useNavigate} from 'react-router-dom';
import Review from '../Review/review';
import FAQ from '../FAQ/Faq';
import Footer from '../Footer/footer';

const HomePage=() => {
  const navigate = useNavigate() ;
  const handleApplication = () => {
    alert("Please Login") ;
    navigate("/login");
}
  return (
    <div>
      <nav>
        <div className="nav__logo"><Link to="#">MarketPlace</Link></div>
        <ul className="nav__links">
          <li className="link"><Link to="/#">Home</Link></li>
          <li className="link"><Link onClick={handleApplication} to="/about">About Us</Link></li>
          <li className="link"><Link onClick={handleApplication} to="/providerprofile">Provider</Link></li>
          <li className="link"><Link onClick={handleApplication} to="/category">Categories</Link></li>
          <li className="link"><Link onClick={handleApplication} to="/contact">Contact</Link></li>
          <li className="link"><Link to="/login" className="nav__btn">LOGIN</Link></li>
          <li className="link"><Link to="/" className="nav__btn">SIGNUP</Link></li>
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
  );
}

export default HomePage;

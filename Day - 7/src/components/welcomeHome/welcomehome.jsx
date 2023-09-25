import React from 'react';
import { Link } from 'react-router-dom';
import "./welcome.css";
import Home from "../../assets/service.jpg"
import Footer from '../Footer/footer';
const welcomeHome = () => {
  return (
    <div>
        <header class="header">
            <nav class="navbar">
                <h1 class="logo">Local Services Marketplace</h1>
                <ul class="nav-links">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Link to="/login" class="btn-signup">Login</Link>

            </nav>
        </header>

        <section class="hero">
            <div class="hero-content">
                <h1>Find and Buy Local Services</h1>
                <p>Discover trusted professionals for all your local service needs.</p>
                <p className="p1">Find the perfect local service providers for all your needs, from home <br/>maintenance and repairs to professional services, right here on our platform.</p>
                <Link to="/" class="btn-get-started">Get Started</Link>
            </div>
        </section>
        <div className="home-img"><img src={Home} alt="/"/></div>
        
        <Footer/>
    </div>

            


  );
}

export default welcomeHome;

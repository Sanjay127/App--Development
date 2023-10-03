import React from 'react';
import "./about.css"
import aboutimg from "../../assets/home-services.jpg"
const About = () => {
  return (
    <div>
      <div className="about-sec">
          <h1>About Us</h1>
        
      </div>
      <div class="container-about">
        <h2>Our Mission</h2>
        <p>In Our MarketPlace ,we are on a mission to empower our community by providing an accessible platform that bridges the gap between local service providers and residents. We understand the importance of supporting local businesses and aim to make it easier than ever for you to access the services you need.</p>
        
        <h2>Our Team</h2>
        <p className="about-p2">We are a dedicated team of individuals passionate about connecting local service providers with customers in our community.</p>
      </div>      
      <div className="about-img">
        <img src={aboutimg} alt="/"/>
      </div>
  </div>
  );
}

export default About;

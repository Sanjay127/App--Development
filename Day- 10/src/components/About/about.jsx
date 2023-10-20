import React from 'react';
import "./about.css"
import aboutimg from "../../assests/About.jpg"
const About = () => {
  return (
    <div>
      <section class="about-hero">
        <div class="heading-about">
          <h1>About Us</h1>
        </div>
        <div class="container-about">
          <div class="content-about">
            <h2>Your Trusted Electronic Service Partner</h2>
            <p>Welcome to Electronic Service, your one-stop destination for all your electronic repair and maintenance needs.
               We are a team of passionate and experienced professionals dedicated to providing top-notch electronic services to individuals and businesses alike.<br/> With a commitment to excellence and a deep understanding of today's technology landscape, we are your trusted partner in keeping your electronic devices running smoothly.</p> 
            <h2>Our Mission</h2>
            <p>At Electronic Service, our mission is clear: to deliver exceptional electronic repair and maintenance services that exceed our customers' expectations. We understand the crucial role that electronic devices play in your daily life, whether it's a smartphone, laptop, gaming console, or any other gadget. Our goal is to ensure that your devices perform at their best, minimizing downtime and maximizing your productivity and enjoyment.</p>
          </div>
          <div class="about-image">
            <img src={aboutimg} alt="/"/>
          </div>
        </div>
      </section>
  </div>
  );
}

export default About;

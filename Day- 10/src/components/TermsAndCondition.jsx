import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/TermsandConditions.css";

const TermsAndCondition = () => {
    const [accepted, setAccepted] = useState(false);
   
      
    const handleAccept = () => {
        // You can perform additional actions here, such as storing the acceptance status in your application's state or database.
        setAccepted(true);
    }

   
  return (
      
   
    
        <div className="terms">
            <div className="container-terms">
                    <h1 className="head-terms">Terms And Condition</h1>
                    <p className="para-terms">
                        Welcome to Our MarketPlace Before you start using our platform, please read these Terms and Conditions carefully. By accessing or using our services, you agree to be bound by these Terms and Conditions.
                    </p>
                    <section className="sec-1">
                        <h1 className="terms-1">1.Acceptance of Terms</h1>
                        <p className="para-1">By using our online marketplace for local services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our platform.</p>
                    </section>
                    <section className="sec-1">
                        <h1 className="terms-1">2.Description of Service</h1>
                        <p className="para-1">Our Service provides an online marketplace that connects service providers with customers seeking local services. Service providers offer various services to customers.</p>
                    </section>
                    <section className="sec-1">
                        <h1 className="terms-1">3.User Accounts</h1>
                        <p className="para-1">To use our platform, you must create a user account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                    </section>
                    <section className="sec-1">
                        <h1 className="terms-1">4.User Responsibilities</h1>
                        <p className="para-1">You agree to use our platform solely for legitimate purposes and in accordance with these Terms and Conditions and all applicable laws and regulations.You will not engage in any activity that disrupts or interferes with the proper functioning of our platform.</p>
                    </section>
                    <section className="sec-1">
                        <h1 className="terms-1">5.Service Providers</h1>
                        <p className="para-1">Service providers are responsible for accurately representing their services, including descriptions, prices, and availability. Service providers agree to honor bookings made through our platform and provide services in a professional and timely manner.</p>
                    </section>
                    <section className="sec-1">
                        <h1 className="terms-1">6.Payments</h1>
                        <p className="para-1">Customers agree to pay for services booked through our platform in accordance with the agreed-upon terms with the service provider.Payment processing may be handled by a third-party payment processor. You agree to their terms and conditions when making payments.</p>
                    </section>
                    <section className="sec-1">
                        <h1 className="terms-1">7.Cancellation and Refunds</h1>
                        <p className="para-1">Cancellation policies may vary among service providers. Customers should review the cancellation policy before booking a service. Service providers are responsible for providing refunds in accordance with their cancellation policies.</p>
                    </section>
                    <section className="sec-1">
                        <h1 className="terms-1">8.Intellectual Property</h1>
                        <p className="para-1"> All content on our platform, including text, graphics, logos, and images, is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content from our platform without permission.</p>
                    </section>
                    <section className="sec-1">
                        <h1 className="terms-1">9.Privacy</h1>
                        <p className="para-1"> Our privacy policy outlines how we collect, use, and protect your personal information. By using our platform, you agree to our privacy policy.</p>
                    </section>
                    <section className="sec-1">
                        <h1 className="terms-1">10.Termination</h1>
                        <p className="para-1"> We reserve the right to terminate or suspend your account and access to our platform at our discretion, with or without cause.</p>
                    </section>
                    <div className='hiii'>
                    <label>
                      <input type='checkbox' checked={accepted}
                      onChange={()=>setAccepted(!accepted)}
                      />{' '}
                      I accept the terms and conditions
                    </label>
                    </div>
                    <Link to ="/adminDashboard"><button className="accept-btn" disabled={!accepted} onclick={handleAccept}><h2>Accept</h2></button></Link>
                    



            </div>
        </div>
    
        
       
  )
};                               

export default TermsAndCondition;

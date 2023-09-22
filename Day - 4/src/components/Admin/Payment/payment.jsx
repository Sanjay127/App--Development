import React from 'react';
import './payment.css';
import { Link } from 'react-router-dom';


const Payment = () => {
  return (
    <div>
      <nav>
            <div className="logo-name">
                  <label className="logo">Online MarketPlace</label>
            </div>
            <div className="menu-items">
                  <ul className="nav-links">
                        <li>
                              <Link className='link-text' to="/adminDashboard">
                                    <span className='link-name'>Dashboard</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminService">
                                    <span className='link-name'>Service</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminServiceProvider">
                                    <span className='link-name'>Service Provider</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminSettings">
                                    <span className='link-name'>Settings</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminRequester">
                                    <span className='link-name'>Service Requester</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminReview">
                                    <span className='link-name'>Review</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminPayment">
                                    <span className='link-name'>Payment</span>
                              </Link>
                        </li>
                  </ul>
                  <ul className="logout-mod">
                        <li>
                              <Link className='link-text'to="/login">
                                    <span className="link-name">Logout</span>
                              </Link>
                        </li>
                  </ul>
            </div>
      </nav>
      <section className='header'>
            <h1 className='head-dashboard'>Local Services</h1>
            <label>admin@gmail.com</label>
      </section>
      <section className="payment">
            
            <h1>Payment</h1>
            
      </section>
    </div>
  )
}

export default Payment;
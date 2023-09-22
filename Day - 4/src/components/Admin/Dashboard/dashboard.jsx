
import React,{useState} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

import Chart from "react-apexcharts";

const Dashboard = () => {
      
      const[state,setState]=useState({
            options: {
                  chart: {
                    id: "basic-bar"
                  },
                  xaxis: {
                    categories: ["Home Services","Personal Services","Professional Services","Automotive Services","Delivery and Logistics","Event and Entertainment","Health and Wellness","Education and Tutoring","Home Improvement and Renovation" ]
                  }
                },
                series: [
                  {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                  }
                ]
      })

  return (
    <>
    <div className="sidebar" id="sidebar">
      <div className="logo">
         <h2>
            Online MarketPlace
         </h2>
      </div>
      <div className="sidebar-menu">
         <ul>
            <li>
               <i className="uil uil-dashboard"></i>
               <Link to="/dashboardhome"><span>Dashboard</span></Link>
            </li>
            <li>
               <i className="uil uil-clipboard-notes"></i>
               <span>Services</span>
            </li>
            <li>
               <i className="uil uil-chart-bar"></i>
               <span>Service Provider</span>
            </li>
            <li>
               <i className="uil uil-calendar-alt"></i>
               <span>Service Requester</span>
            </li>
            <li>
               <i className="uil uil-shopping-bag"></i>
               <span>Payment</span>
            </li>
            <li>
               <i className="uil uil-clipboard-notes"></i>
               <span>Review</span>
            </li>
            <li>
               <i className="uil uil-user-circle"></i>
               <span>Account</span>
            </li>
            <li>
               <i className="uil uil-signin"></i>
               <span>Logout</span>
            </li>
         </ul>
      </div>
   </div>

   <div className="main-content" id="main-content">
      <header className="flex">
         <h2>
            <i className="uil uil-bars" id="menu-icon"></i>
            Dashboard
         </h2>

         <div className="search-box">
            <i className="uil uil-search"></i>
            <input type="text" placeholder="Search Here..."/>

         </div>

         <div className="admin-box flex" >
            
            <div>
               <small>Admin</small>
            </div>
         </div>
      </header>
    </div>
    

      <section className="dashboard">
            <h1>Most Visited Services</h1>
            <div className="content">
                  <Chart className="chart"
                      options={state.options}
                      series={state.series}
                      type="bar"
                      width="700"
                  />
            </div>

      </section>
      </>
  )
}

export default Dashboard
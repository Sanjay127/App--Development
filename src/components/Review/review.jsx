import React from 'react'
import './review.css'
import { Link } from 'react-router-dom'
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import { CiBank,CiLogout } from "react-icons/ci";
import { FiCheckSquare } from "react-icons/fi";
import { GrServices} from "react-icons/gr";

import 
{BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill}
from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/UserSlice';



const Review = () => {

      const navigate = useNavigate() ;
      const dispatch = useDispatch() ;
      const handleLogout = (e) => {
            e.preventDefault() ;

            dispatch(logout()) ;
            navigate("/login") ;
      }
  return (
    <div id="sidebar-service">
      <div className='online-title'>
            <div className='online-brand'>
                <h1>Online MarketPlace</h1>
            </div>
            
        </div>

        <ul className='side-list'>
            <li className='sidebar-list-item'>
                <Link to="/dashboardhome">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-item'>
                <Link to="/service">
                    <GrServices className='icon'/> Services
                </Link>
            </li>
            <li className='sidebar-item'>
                <Link to="/categories">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </Link>
            </li>
            <li className='sidebar-item'>
                <Link to="/requester">
                    <BsPeopleFill className='icon'/> Service Requester
                </Link>
            </li>
            <li className='sidebar-item'>
                <Link to="/serviceprovider">
                    <AiOutlineUsergroupAdd className='icon'/> Service Provider
                </Link>
            </li>
            <li className='sidebar-item'>
                <Link to="/payment">
                    <CiBank className='icon'/> Payments
                </Link>
            </li>
            <li className='sidebar-item'>
                <Link to="/review">
                    <FiCheckSquare className='icon'/> Review
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/" onClick={(e) => handleLogout(e)}>
                  <CiLogout className='icon'/>Logout
                </Link>
            </li>
        </ul>
      
    </div>

  )
}

export default Review;
import React from 'react'
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import { CiBank,CiLogout } from "react-icons/ci";
import { FiCheckSquare } from "react-icons/fi";
import { GrServices} from "react-icons/gr";

import 
{BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h1>Online MarketPlace</h1>
            </div>
            
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/dashboardhome">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/service">
                    <GrServices className='icon'/> Services
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/categories">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/requester">
                    <BsPeopleFill className='icon'/> Service Requester
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/serviceProvider">
                    <AiOutlineUsergroupAdd className='icon'/> Service Provider
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/payment">
                    <CiBank className='icon'/> Payments
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/review">
                    <FiCheckSquare className='icon'/> Review
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/login">
                    <CiLogout className='icon'/> Logout
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;
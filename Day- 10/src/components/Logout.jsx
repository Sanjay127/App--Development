import React from 'react'

import { Link } from 'react-router-dom';
import {CiLogout } from "react-icons/ci";
const Logout =() => {
  return (
    <div>
          <Link to ="/login" >
            <CiLogout className=""/>Logout
          </Link>
       
    </div>
  )
};
export default Logout;

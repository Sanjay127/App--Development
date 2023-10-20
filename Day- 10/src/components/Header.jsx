import React from 'react'
import './Admin/AdminDashboard/admindash.css'
import { selectUser } from '../../src/components/redux/UserSlice'
import { useSelector } from 'react-redux'

const  Header= () => {
      const user = useSelector(selectUser) ;
      return( 
            <div className='header'>
                  <label>{user.email}</label>
            </div>
      )
}

export default Header
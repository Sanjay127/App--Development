import React,{useState} from 'react'
import './serviceRequester.css'
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
import DataTable from 'react-data-table-component';




const ServiceRequester = () => {

      const navigate = useNavigate() ;
      const dispatch = useDispatch() ;
      const handleLogout = (e) => {
            e.preventDefault() ;

            dispatch(logout()) ;
            navigate("/login") ;
      }

      const column = [
            {
                  name:'Customer Name',
                  selector: row => row.name,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Email Id',
                  selector: row => row.email,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Service Name',
                  selector: row => row.insurance,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Edit',
                  cell:(row) => <button className='btn'>Edit</button>,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        
                  }
            },
            {
                  name:'Delete',
                  cell:(row) => <button className='btndel'>Delete</button>,
                  style:{
                        fontSize:"14px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        padding:"20px 0",
                  }
            },
      ]
      const data = [
            {
                  id: 1,
                  name: "Ranjith",
                  email: "ranjith@gmail.com",
                  insurance: "Home Services",
                  action: "",
            },
            {
                  id: 2,
                  name: "Viji",
                  email: "viji@gmail.com",
                  insurance: "Personal Services",
                  action: "",
            },
            {
                  id: 3,
                  name: "Sanjay",
                  email: "sanjay@gmail.com",
                  insurance: "Pet Services",
                  action: "",
            },
            

            
      ]
      const[records, setRecords] = useState(data);
      function handleFilter(event)
      {
            const newData = data.filter(row => {
                  return row.name.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setRecords(newData)
      }
      const tableRequester = {
            headCells:{
                  style:{
                        fontSize:'20px',
                        fontWeight:'600',
                        padding:'30px',
                        display:"flex",
                        justifyContent:"center",
                  }
            }
      }


  return (
      <>
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
                <Link to="/" onClick={(e) => handleLogout(e)}>
                  <CiLogout className='icon'/>Logout
                </Link>
            </li>
            

        </ul>
        
      </div>

      
    <section className="requester">
      <h1>Manage Requester</h1>
      <div className="table">
            <DataTable columns={column} data={records} className='table1' fixedHeader
            customStyles={tableRequester}
            highlightOnHover
            actions={<button className='btn-ex'>Export</button>}
            subHeader
            subHeaderComponent={<input className='input-search' type="text" placeholder='Search Here' onChange={handleFilter}></input>}>

            </DataTable>
      </div>
      </section>
      </>
  )
}

export default ServiceRequester;
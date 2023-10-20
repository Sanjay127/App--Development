import React, { useState, useEffect } from 'react';
import './Admincustomer.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUsers, getUsers } from '../../ApiService/Api';
import { logout } from '../../redux/UserSlice';
import EditCustomer from './Editcustomer'; // Import the EditCustomer component

const Admincustomer = () => {
  const [customer, setCustomer] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // Track the selected customer for editing
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchCustomers = async () => {
    try {
      const response = await getUsers();
      setCustomer(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logout());
    navigate("/login");
  }

  const submitClick = (customer) => {
    navigate('/editcustomer')
    setSelectedCustomer(customer);
  }

  const onHandleDelete = async (id) => {
    await deleteUsers(id);
    alert("Deleted successfully");
    fetchCustomers();
  }

  return (
    <div>
      <nav className='nav-b'>
            <div className="logo-name">
                  <label className="logo">Admin</label>
            </div>
            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                              <Link className='link-text' to="/admindashboard">
                                  <span className='link-name'>Dashboard</span>
                              </Link>
                    </li>
                    <li>
                              <Link className='link-text' to="/category">
                                    <span className='link-name'>Service</span>
                              </Link>
                    </li>
                    <li>
                        <Link className='link-text' to="/adminprovider">
                                <span className='link-name'>Provider</span>
                        </Link>
                    </li>
                        
                    <li>
                        <Link className='link-text' to="/admincustomer">
                                <span className='link-name'>Customer</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='link-text' to="/adminbooking">
                                <span className='link-name'>Service Booking</span>
                        </Link>
                    </li>
                   
                        
                </ul>
                <ul className="logout-mod">
                        <li>
                              <Link className='link-text-logout' onClick={(e) => handleLogout(e)}>
                                    <span className="link-name">Logout</span>
                              </Link>
                        </li>
                  </ul>
            </div>
      </nav>

      <section className="customer-table">
        <h1>Manage Customers</h1>
        <table className='table-customer'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Country</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(customer) ? (
              customer.map((customer) => (
                <tr key={customer.cid}>
                  <td>{customer.firstname}</td>
                  <td>{customer.lastname}</td>
                  <td>{customer.age}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>
                  <td>{customer.country}</td>
                  <td>{customer.state}</td>
                  <td className='tdbtn'>
                    <button className='btn' onClick={() => submitClick(customer.cid)}>Edit</button>
                    <button className='btndel' onClick={() => onHandleDelete(customer.cid)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Customer Available!</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Render EditCustomer component when a customer is selected */}
      {selectedCustomer && (
        <EditCustomer customer={selectedCustomer} fetchCustomers={fetchCustomers} />
      )}
    </div>
  );
};

export default Admincustomer;

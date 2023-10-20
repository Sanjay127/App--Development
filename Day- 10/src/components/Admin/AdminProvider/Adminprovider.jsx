import React, { useState, useEffect } from 'react';
import '../../Admin/AdminCustomer/Admincustomer.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProviders, getProviders } from '../../ApiService/Api';
import { logout } from '../../redux/UserSlice';

const AdminProvider = () => {
  const [provider, setProvider] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await getProviders();
      setProvider(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logout());
    navigate('/login');
  };

  const submitClick = (e) => {
    e.preventDefault();
    navigate('/editcustomer');
  };

  const onHandleDelete = async (id) => {
    try {
      await deleteProviders(id);
      alert('Deleted successfully');
      fetchProducts();
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert('Failed to delete the customer. Please try again.');
    }
  };

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
                              <Link className='link-text' to="/adminservice">
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
            <h1>Manage Provider</h1>
            
            <table className='table-customer'>
            <thead>
              <tr>
               
                <th>
                  Name
                </th>
                <th>
                  Age
                </th>
                <th>
                  Phone
                </th>
                <th>
                  Gender
                </th>
                <th>
                  Address
                </th>
                <th>
                  Service Offered
                </th>
                <th>
                  Category
                </th>
                <th>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(provider) ? (
                provider.map((provider) => (
                  <tr key={provider.id}>
                    <td>{provider.name}</td>
                    <td>{provider.age}</td>
                    <td>{provider.phone}</td>
                    <td>{provider.gender}</td>
                    <td>{provider.address}</td>
                    <td>{provider.serviceoffered}</td>
                    <td>{provider.category}</td>
                    <td>{provider.description}</td>
                    <td className='tdbtn'>
                      <button className='btn' onClick={submitClick}>Edit</button>
                      <button className='btndel' onClick={() => onHandleDelete(provider.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No Customer Available !</td>
                </tr>
              )}
            </tbody>
          </table>
        
            
      </section>

    </div>
  );
};

export default AdminProvider;

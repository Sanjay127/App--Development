import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import booking from "../../../assests/booking-service.jpg"

import Axios from 'axios'; // Import Axios for making API requests

const EditCustomer = (props) => {
  const navigate = useNavigate() ;

  const [editedData, setEditedData] = useState(props.customer);
  const [registerData, setRegisterData] = React.useState({
    firstname:"",
    lastname:"",
    age:"",
    gender:"",
    phone:"",
    address:"",
    country:"",
    state:""
})


  useEffect(() => {
    setEditedData(props.customer);
  }, [props.customer]);

  const handleCancel = () => {
    props.navigate("/admincustomer");
  };
  const handleOnChange = (e) => {
    const [name, value] = [e.target.name, e.target.value] ;
            setRegisterData({
                  ...registerData,
                  [name]:value
            })
  }


  const handleApply = () => {
    // Make an API request to update the customer's data using the editedData
    // Replace the following with your actual API endpoint
    const apiUrl = `http://localhost:8181/api/profile/put/${editedData.id}`;

    Axios.put(apiUrl, editedData)
      .then(response => {
        console.log('Customer updated successfully', response.data);
        props.fetchCustomers(); // Refresh the customer list
        props.navigate("/admincustomer");
      })
      .catch(error => {
        console.error('Error updating customer', error);
      });
  };

  // ... (your existing code)

  return (
    <div className="login-container">
         <img src={booking} alt="images" />
       <div className="login-container01">
         <h1>EDIT CUSTOMER</h1>
         <div className="login-container02">
           <input type="text" placeholder="FIRST NAME" className="input" name='firstname' onChange={handleOnChange} required/>
           <input type="text" placeholder="LAST NAME" className="input" name='lastname' onChange={handleOnChange} required/>
           
         </div>
         <div className="login-container03">
           <input type="text" placeholder="AGE" className="input" name='age' onChange={handleOnChange} required/>
           <select name='gender'  onChange={handleOnChange} required>
             <option value="Option 1">GENDER</option>
             <option value="male">MALE</option>
             <option value="female">FEMALE</option>
             <option value="others">OTHERS</option>
           </select>
         </div>
         <div className="login-container04">
           
           <input type="number" placeholder="MOBILE NUMBER" className="input" name='phone' onChange={handleOnChange} required/>
         </div>
         <div className="address-con">
           <textarea
             placeholder="PERMANENT ADDRESS"
             className="login-textarea"
             rows={3}
             onChange={handleOnChange}
             name='address' required
           ></textarea>
         </div>
         
         <div className="login-container011">
           <input type="text" placeholder="COUNTRY" className="input" name='country' onChange={handleOnChange} required/>
           <input type="text" placeholder="STATE" className="input" name='state' onChange={handleOnChange} required/>
         </div>
         <div className="login-container10">
           <button type="button" className="button1" onClick={handleCancel}>
             <span>
               <span>CANCEL</span>
               <br></br>
             </span>
           </button>
           <button type="button" className="button2" onClick={handleApply}>
             APPLY
           </button>
         </div>
       </div>
     </div>
  );
};

export default EditCustomer;

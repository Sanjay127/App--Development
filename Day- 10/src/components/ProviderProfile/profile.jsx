import React from 'react';
import "./profile.css"
import Sidebar from '../CustomerDashboard/Sidebar';
import { useNavigate } from 'react-router-dom'
import { addProviders} from '../ApiService/Api'
const Profile = () => {
  const navigate = useNavigate() ;
   const [registerData, setRegisterData] = React.useState({
     providername:'',
     providerage:"",
     providerphone:"",
     providergender:"",
     provideraddress:"",
     providerserviceoffered:"",
     providercategory:"",
     providerdescription:""
 })
  
   const handleOnChange = (e) => {
     const [name, value] = [e.target.name, e.target.value] ;
             setRegisterData({
                   ...registerData,
                   [name]:value
             })
   }


   
  
   const handleApply = (e) => {
     if(registerData.providername === "" || registerData.providerage === "" || registerData.providerphone === "" || registerData.providergender === "" || registerData.provideraddress === "" || registerData.providerserviceoffered === "" || registerData.providercategory === "" || registerData.providerdescription)
     {
       alert("Please enter all details")
     }
     else{

         alert("Applied Successfully");
         e.preventDefault() ;
         console.log(registerData)
         addProviders(registerData) ;
         navigate("/providerprofile")
       }
       
    }
   
  return (
    <div>
      <Sidebar/>
      <div className="container-provider">
        <h1>Provider Account Setup</h1>
        <form id="account-setup-form">
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="providername" onClick={handleOnChange} required/>
            </div>
            <div className="form-group">
                <label for="phone">Age:</label>
                <input type="text" id="age" name="providerage"  onClick={handleOnChange} required/>
            </div>
            <div className="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="providerphone"  onClick={handleOnChange} required/>
            </div>
            <div className="form-group">
                <label for="phone">Gender:</label>
                <input type="text" id="gender" name="providergender"  onClick={handleOnChange} required/>
            </div>
            <div className="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" name="provideraddress"  onClick={handleOnChange} required/>
            </div>
            <div className="form-group">
                <label for="website">Services Offered</label>
                <input type="text" id="services" name="providerserviceoffered"  onClick={handleOnChange} required/>
            </div>
            <div className="form-group">
                <label for="category">Service Category:</label>
                <select id="category" name="providercategory"  onClick={handleOnChange} required>
                    <option value="category">Select Category</option>
                    <option value="electronic">Electronic Service</option>
            
                </select>
            </div>
            <div className="form-group">
                <label for="description">Service Description:</label>
                <textarea id="description" name="providerdescription" rows="1"  onClick={handleOnChange}></textarea>
            </div>
            <button type="submit" onClick={handleApply}>Complete Setup</button>
        </form>
    </div>
       </div>
  );
}

export default Profile;

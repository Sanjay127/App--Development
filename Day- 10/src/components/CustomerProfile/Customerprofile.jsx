import React from 'react';
import "../ServiceBooking/servicebooking.css"
import { Link } from 'react-router-dom';
import { addUsers} from '../ApiService/Api'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../CustomerDashboard/Sidebar';
const Customerprofile = () => {
   const navigate = useNavigate() ;
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
   var checkBox = document.getElementById("myCheck");
   var checkBox1 = document.getElementById("myCheck1");
   const handleCancel = () => {
     navigate("/homelog")
   }
   const handleOnChange = (e) => {
     const [name, value] = [e.target.name, e.target.value] ;
             setRegisterData({
                   ...registerData,
                   [name]:value
             })
   }
   
   
  
   const handleApply = (e) => {
     if(registerData.firstname === "" || registerData.lastname === "" || registerData.age === "" || registerData.gender === "" || registerData.phone === "" || registerData.address === "" || registerData.country === "" || registerData.state === "")
     {
       alert("Please enter all details")
     }
     else{
       if(checkBox.checked === true && checkBox1.checked === true)
       {
         alert("Applied Successfully");
         e.preventDefault() ;
         console.log(registerData)
         addUsers(registerData) ;
         navigate("/homelog")
       }
       else{
         alert("Please check terms and condition and privacy policy")
       }
     }
   }
  return (
   <div>
      <Sidebar/>
     <div className="login-container">
       
       <div className="login-container01">
         <h1>Personal Info</h1>
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
         <div className="login-container08">
           <input type="checkbox" id="myCheck"/>
           <label>Accept <Link to="/terms">Terms and Conditions</Link></label>
         </div>
         <div className="login-container09">
           <input type="checkbox" id="myCheck1"/>
           <label>Accept <Link to="/policy">Privacy Policy</Link></label>
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
     </div>
  );
}

export default Customerprofile;

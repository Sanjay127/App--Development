import React from 'react'
import { Link } from 'react-router-dom'
import "./servicebooking.css"
import { useNavigate } from 'react-router-dom'
import { addUsers} from '../ApiService/Api'
import booking from "../../assests/booking-service.jpg"

const ServiceBooking = (props) => {
  const navigate = useNavigate() ;
  const [registerData, setRegisterData] = React.useState({
    customerfullname:'',
    customerage:"",
    customergender:"",
    customeremail:"",
    customerphone:"",
    customeraddress:"",
    service:"",
    customercountry:"",
    customerstate:"",
    date:""
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
    if(registerData.customerfullname === "" || registerData.customerage === "" || registerData.customergender === "" || registerData.customeremail === "" || registerData.customerphone === "" || registerData.customeraddress === "" || registerData.service === "" || registerData.customercountry === "" || registerData.customerstate === "" || registerData.date === "")
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
       <div className="login-container">
        <img src={booking} alt="images" />
        <div className="login-container01">
           <h1>BOOKING FORM</h1>
          <div className="login-container02">
            <input type="text" placeholder="FULL NAME" className="input" name='customerfullname' onChange={handleOnChange} required/>
          
          </div>
          <div className="login-container03">
            <input type="text" placeholder="AGE" className="input" name='customerage' onChange={handleOnChange} required/>
            <select name='gender'  onChange={handleOnChange} required>
              <option value="Option 1">GENDER</option>
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
              <option value="others">OTHERS</option>
            </select>
          </div>
        <div className="login-container04">
          <input type="email" placeholder="PERMANENT EMAIL" className="input" name='customeremail' onChange={handleOnChange} required/>
          <input type="number" placeholder="MOBILE NUMBER" className="input" name='customerphone' onChange={handleOnChange} required/>
        </div>
        <div className="address-con">
          <textarea
            placeholder="PERMANENT ADDRESS"
            className="login-textarea"
            rows={3}
            onChange={handleOnChange}
            name='customeraddress' required
          ></textarea>
        </div>
        <div className="login-container07">
          <select name='service' onChange={handleOnChange}>
            <option value="Option 1">SERVICES</option>
            <option value="smartphone">SmartPhone Repair Services</option>
            <option value="laptop">Laptop Repair Services</option>
            <option value="tablet">Tablet Repair Services</option>
            <option value="desktop">Desktop Computer Repair Services</option>
            <option value="monitor">Monitor Services</option>
            <option value="printer">Printer Services</option>
            <option value="wearable">Wearable Services</option>
            <option value="camera">Camera Services</option>
            <option value="audio">Audio Services</option>
            <option value="ac">AC Repair Services</option>
            <option value="fridge">Fridge Repair Services</option>
            
          </select>
        </div>
        <div className="login-container011">
          <input type="text" placeholder="COUNTRY" className="input" name='customercountry' onChange={handleOnChange} required/>
          <input type="text" placeholder="STATE" className="input" name='customerstate' onChange={handleOnChange} required/>
        </div>
        <div className="login-container012">
          <input type="date" placeholder="SELECT DATE" className="input" name='date' onChange={handleOnChange} required/>
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
  )
}

export default ServiceBooking;

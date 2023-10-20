import React from "react";
import '../assests/css/Signup.css'
import signup from '../assests/signup-img.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from "./ApiService/Api";



const Signup = () =>{

      const navigate = useNavigate() ;

    const[signUpFormData,setSignUpFormData]=React.useState({
       name:"",
       email:"",
       password:"",
       role:"customer"

    })

    
    const handleSignUpFormChange=(e)=>{
        const [name,value]=[e.target.name,e.target.value];
        setSignUpFormData({
            ...signUpFormData,
            [name]: value
        })
    }


    const submitSignUpForm = (e) => 
    {
       e.preventDefault();
        console.log(signUpFormData);
        registerUser(signUpFormData) ;
       alert("Register Successfully") ;
       navigate("/login") ;
    }

      return(
            <form onSubmit={submitSignUpForm}>
                  <div className="main">
                        <div>
                             <img src={signup} alt="" /> 
                        </div>
                        <div className="container-sign">
                              <h1><strong>SIGN</strong> UP</h1>
                              
                              <input type="text" placeholder="NAME" name="name" onChange={handleSignUpFormChange} required></input>
                              
                              <input type="email" placeholder="EMAIL ID" name="email" onChange={handleSignUpFormChange} required ></input>
                              <input type="password" placeholder="PASSWORD" name="password" onChange={handleSignUpFormChange} required></input>
                              
                              <button type="submit">SIGNUP</button>
                              <label>Already have an account? <Link to='/login'>SignIn</Link></label>
                        </div>    
                  </div>

            </form>
      )
}

export default Signup
import React from "react";
import '../assets/css/Signup.css';
import signupimg from "../assets/signup-img.jpeg";

const Signup = () =>
{
      const [signupData, setSignUpData] = React.useState({
            firstname:"",
            lastname:"",
            username:"",
            email:"",
            password:"",
            confirmpassword:""
      })

      const handleOnChange = (e) =>
      {
            const [name, value] = [e.target.name, e.target.value] ;
            setSignUpData({
                  ...signupData,
                  [name]:value
            })
      }

      const onSubmit = (e) => {
            e.preventDefault() ;
            console.log(signupData) ;
      }

      return(
            <form onSubmit={onSubmit}>
                  <div className="main">
                    <div>
                        <img src={signupimg}/>
                    </div>
                        <div className="container">
                              <h1>SIGNUP</h1>
                              <input type="text" placeholder="FIRSTNAME" name="firstname" onChange={handleOnChange}></input>
                              <input type="text" placeholder="LASTNAME" name="lastname" onChange={handleOnChange}></input>
                              <input type="text" placeholder="USERNAME" name="username" onChange={handleOnChange}></input>
                              <input type="email" placeholder="EMAIL ID" name="email" onChange={handleOnChange}></input>
                              <input type="text" placeholder="PASSWORD" name="password" onChange={handleOnChange}></input>
                              <input type="text" placeholder="CONFIRM PASSWORD" name="confirmpassword" onChange={handleOnChange}></input>
                              <button type="submit">LOGIN</button>
                        </div>    
                  </div>
                   
            </form>
      )
}

export default Signup;
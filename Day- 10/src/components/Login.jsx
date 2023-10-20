import React, {  } from 'react'
import loginimg from '../assests/login - img.jpg'
import '../assests/css/Login.css'
import { Link, useNavigate} from 'react-router-dom'
import { login } from './redux/UserSlice'
import { useDispatch } from 'react-redux'
import { useUser } from '../components/Context/UserContext';
import {  loginUser } from './ApiService/Api'



const Login = () => {
  const navigate = useNavigate();
  const {login: userLogin}=useUser();

  const dispatch=useDispatch();

  const[loginFormData,setLoginFormData]=React.useState({
      email:"",
      password:""
  })
  

  
  const handleLoginFormChange=(e)=>{
      const [name,value]=[e.target.name,e.target.value];
      setLoginFormData({
          ...loginFormData,
          [name]: value
      })
  }
  
  

  const submitLoginForm = async (e) => {
      e.preventDefault();
      if(!loginFormData.email || !loginFormData.password){
          console.log("Please enter details");
      }
      else {
          try{
          const res=await loginUser(loginFormData).then((response)=>{
      const token=response.data.token;
      localStorage.setItem('token',token);
      
          });
          console.log(res);
          navigate('/homelog ');
          userLogin();
      dispatch(login({ 
          email:loginFormData.email,
          password: loginFormData.password
      }));
  }
  catch (err){
      console.error(err);
  }
  }
      if(loginFormData.email ==="Admin1"||loginFormData.password ==="admin1"){

          navigate('/admindashboard');
          userLogin();
      }
    }

  return (
    <div>
       <div className="login-page" onSubmit={(e) => submitLoginForm(e)}>
            <img src={loginimg} alt="" />
            <form>
                  <div className="login-con">
                        <label className="heading">LOGIN</label>
                        <input type="email" name ="email"
                        value={loginFormData.email}
                        onChange={handleLoginFormChange} placeholder='EMAIL' />
                        <input type="password" name ="password" 
                        value={loginFormData.password}
                        onChange={handleLoginFormChange}placeholder='PASSWORD'/>
                        <label>Forget Password? <Link to='/'>Click here</Link></label>
                        <button type="submit">LOGIN</button>
                        <label>Already have an account? <Link to='/'>SignUp</Link></label>
                  </div>
            </form>
      </div>

    </div>
  )
}

export default Login
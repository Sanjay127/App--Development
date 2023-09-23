import React ,{useState}from "react";
import '../assets/css/Login.css';
import loginimg from "../assets/login - img.jpg";
import { Link, useNavigate} from "react-router-dom";
import { login } from "./redux/UserSlice";
import { useDispatch } from "react-redux";


const Login = () =>{
   
      const navigate = useNavigate() ;
      const [username,setUsername]=useState("");
      const [password,setPassword]=useState("");

      const dispatch=useDispatch();
    
      const onSubmit = (e) => {
            e.preventDefault() ;
            dispatch(
                  login({
                        username:username,
                        password:password,
                  })
            );
            if(username === 'admin@123' && password ==='12345')
            {
                  navigate("/adminDashboard") ;
            }
      }

      return(
            <form onSubmit={(e)=> onSubmit(e)}>
                  <div className="main">
                    <div className="image">
                        <img src={loginimg} alt="/"/>
                    </div>
                    <div className="container">
                            <h1>LOGIN</h1>
                            <input className="name-class" type="text" name="username" value={username} required onChange={(e)=>setUsername(e.target.value)} placeholder="USERNAME"></input>
                            <input className="password-class" type="password" name="password" value={password} required onChange={(e)=>setPassword(e.target.value) } placeholder="PASSWORD"></input>
                            
                            <Link to ="/adminDashboard"><button type="submit">LOGIN</button></Link>
                    </div>    
                  </div>
                   
            </form>
      )
}
export default Login;
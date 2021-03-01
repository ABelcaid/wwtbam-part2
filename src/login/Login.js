import './login.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


const Login = () => {

  const [phone ,setPhone] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const prticipant = {phone,password};

 

    axios.post(`http://localhost:8080/participant/login`, prticipant)
    .then(res => {
      console.log(res.data);
     
      
     
    })

  }
  


    return ( 
        <div className="login">
         
        <form className="log-in"  onSubmit={handleSubmit}>
          <h1 className="title">Login</h1>
          <input 
                className="input " 
                type="text" 
                 placeholder="Phone" 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
          />
            <input 
                className="input " 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
          />

          

          <button className="input submit" type="submit">Log In</button>
         
          <Link to="/register">don't have an acount ? create now</Link>
        </form>
        
      </div>
        


       
     );
}
 
export default Login;



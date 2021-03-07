import './login.css';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


const Login = () => {

  const [phone ,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    const prticipant = {phone,password};

    
 

    axios.post(`${process.env.REACT_APP_URL_API}/participant/login`, prticipant)
    .then(res => {

      console.log(res);

      if (!res.data.message) {
        let token = res.data.token;
        let idParticipant = res.data.id;
        let nameParticipant = res.data.name
  
        localStorage.setItem("token", token);      
        localStorage.setItem("idParticipant", idParticipant);
        localStorage.setItem("nameParticipant", nameParticipant);
       
       history.push('/group')
        
      } else {
        alert(res.data.message)
      }

     


      


     
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



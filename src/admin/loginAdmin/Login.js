import './login.css';
import { useState } from 'react';
import axios from 'axios';


const LoginAdmin = () => {

  const [phone ,setPhone] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const admin = {phone,password};

 

    axios.post(`http://localhost:8080/admin/login`, admin)
    .then(res => {
      console.log(res.data.token);

      let token = res.data.token;

      localStorage.setItem("token", token);
     
      
     
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
         
        </form>
        
      </div>
        


       
     );
}
 
export default LoginAdmin;



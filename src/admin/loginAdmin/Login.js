import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


const LoginAdmin = () => {

  const [phone ,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    const admin = {phone,password};

 

    axios.post(`${process.env.REACT_APP_URL_API}/admin/login`, admin)
    .then(res => {
      console.log(res.data.token);

      if (!res.data.message) {

        let token = res.data.token;

  
        localStorage.setItem("token", token);
       

        history.push('/admin/home')
        
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
         
        </form>
        
      </div>
        


       
     );
}
 
export default LoginAdmin;



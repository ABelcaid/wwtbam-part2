import './login.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Register = () => {

  const [full_name ,setFullName] = useState('');
  const [phone ,setPhone] = useState('');
  const [email ,setEmail] = useState('');
  const [age ,setAge] = useState('');
  const [password,setPassword] = useState('');
  const  history = useHistory();



    const handleSubmit = (e) => {
      e.preventDefault();

      const prticipant = {full_name, phone, email, age, password};

   

      axios.post(`${process.env.REACT_APP_URL_API}/participant/register`, prticipant)
      .then(res => {
        console.log('You have been registred ... ');
        history.push('/')
        
       
      })

    }

  



    return ( 
        <div className="login">
         
        <form className="log-in" onSubmit={handleSubmit}>
          <h1 className="title">Register</h1>
          <input 
                className="input" 
                type="text" 
                 placeholder="Full Name"
                value={full_name}
                onChange={(e)=>setFullName(e.target.value)}
          />
          <input 
                className="input " 
                type="text" 
                 placeholder="Phone" 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
          />
          <input 
                className="input " 
                type="text" 
                 placeholder="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
          />
          <input 
                className="input " 
                type="text" 
                 placeholder="Age" 
                value={age}
                onChange={(e)=>setAge(e.target.value)}
          />        
          <input 
                className="input " 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="input submit" type="submit">Register</button>

          <Link to="/">Already have an account login here</Link>

       
        </form>
        
      </div>
        


       
     );
}
 
export default Register;



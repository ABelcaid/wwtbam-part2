import { useState } from 'react';
import axios from 'axios';
import '../admin.css';

const AddAdmin = () => {

    const [full_name ,setFullName] = useState('');
    const [phone ,setPhone] = useState('');
    const [password,setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const admin = {full_name,phone,password};

      let token = localStorage.getItem("token");
  
   
  
      axios.post(`${process.env.REACT_APP_URL_API}/admin/add`, admin, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }}
      )
      .then(res => {
        console.log(res.data);
       
        
       
      })
  
    }



    return ( 



        <div className="addAdmin">
            

            <div className="addForm">
            <h1>Add admin</h1>
            <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Full Name</label>
          <input
           type="text" 
           className="form-control"  
           placeholder="Enter full Nane" 
           value={full_name}
           onChange={(e)=>setFullName(e.target.value)}
           
           />
        </div>
        <div className="form-group">
          <label >Phone</label>
          <input 
          type="text" 
          className="form-control"  
          placeholder="Enter phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
           />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input 
          type="password" 
          className="form-control"  
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}

           />
        </div>
        
        <button type="submit" className="btn btn-primary">Add New Admin</button>
      </form>
            </div>
        </div>
     );
}
 
export default AddAdmin;
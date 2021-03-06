import { useState } from 'react';
import axios from 'axios';

const JoinGroup = () => {

    const [codeGroupe , setcodeGroupe] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      let token = localStorage.getItem("token");

      let id_participant = localStorage.getItem("idParticipant");



  
   
  
      axios.put(`${process.env.REACT_APP_URL_API}/group/joinGroup/${codeGroupe}`, {id_new_participant : id_participant} , {
        headers: {
          'Authorization': `Bearer ${token}` 
        }}
      )
      .then(res => {
        console.log(res.data);
       
        
       
      })
  
    }


    return ( 
        <div className="joinGroup">
            <h1>Join Group</h1>

            <form onSubmit={handleSubmit}>
        <div className="form-group">
          
          <input
           type="text" 
           className="form-control"  
           placeholder="Enter code group" 
           value={codeGroupe}
           onChange={(e)=> setcodeGroupe(e.target.value)}
           
           />
        </div>

      
        
        <button type="submit" className="btn ">Jion group </button>
      </form>
        </div>
     );
}
 
export default JoinGroup;
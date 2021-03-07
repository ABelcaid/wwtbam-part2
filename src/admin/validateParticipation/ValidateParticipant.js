import { useEffect, useState } from 'react';
import axios from 'axios';

import './validate.css'

const ValidateParticipant = () => {

    const [participants , setParticipants] = useState(null);

    useEffect(()=>{

        axios.get(`${process.env.REACT_APP_URL_API}/participant/all`)
        .then(function (response) {
         
          
            setParticipants(response.data)
        
        }).catch(function (err) {
          console.log(err);
      });
      
      })

    const handleValidate = (id) =>{

       

            axios.put(`http://localhost:8080/participant/validate/${id}`)
            .then(function (response){
               console.log(response.data);
        })
            .catch(function (err) {
                console.log(err);
        });


    }

    return ( 
        <div className="validateParticipant tbl-content">
            <h1 >Validate Particpant</h1>

            
            tabTitle

        <table className="table">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {
          participants &&
          participants.map((participants) =>(

            <tr key={participants._id}>
            <td>{participants.full_name}</td>
            <td>{participants.phone}</td>
            <td>{participants.email}</td>
            <td>{participants.age}</td>
            <td><button type="button" onClick={()=> handleValidate(participants._id)} className="btnValidate">Validate</button></td>

          </tr>
            
          ))
        }

         
        
         
        </tbody>
      </table>

        </div>
     );
}
 
export default ValidateParticipant;
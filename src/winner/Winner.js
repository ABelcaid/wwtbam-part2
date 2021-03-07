import { useEffect, useState } from 'react';
import axios from 'axios';


const Winner = () => {

    const [winner ,setWinner] = useState('');

    useEffect(()=>{
        let idWinner = localStorage.getItem("idWinner");

        console.log('====================================');
        console.log(idWinner);
        console.log('====================================');

        axios.get(`${process.env.REACT_APP_URL_API}/participant/get/${idWinner}`)
        .then(function (response) {
         
          setWinner(response.data)
            console.log(response.data);
        
        }).catch(function (err) {
          console.log(err);
      });

        
       
    
      
      },[])

    return ( 
        <div className="winner">
            <h1>the winner </h1>
            <h1>{winner.full_name}</h1>
        </div>
     );
}
 
export default Winner;
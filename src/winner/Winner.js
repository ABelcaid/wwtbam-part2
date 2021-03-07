import { useEffect, useState } from 'react';
import axios from 'axios';
import '../group/group.css';


const Winner = () => {

    const [winner ,setWinner] = useState('');

    const [gift ,setGift] = useState('');

    useEffect(()=>{
        let idWinner = localStorage.getItem("idWinner");

        let idGift = localStorage.getItem("idGift");

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


      axios.get(`${process.env.REACT_APP_URL_API}/gifts/getGift/${idGift}`)
      .then(function (response) {
       
        setGift(response.data)
          console.log(response.data);
      
      }).catch(function (err) {
        console.log(err);
    });

    
       
    
      
      },[])

    return ( 
        <div className="winner">
            <h1>The Winner is :  </h1>
            <h1>{winner.full_name}</h1>
            <h1>Gift :{gift.name} </h1>
        </div>
     );
}
 
export default Winner;
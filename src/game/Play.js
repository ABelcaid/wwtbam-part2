import './game.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Play = () => {

    const [question , setQuestion] = useState(null);
    const [questionNum , setQuestionNum] = useState(1);
    

    const [participantReady , setParticipantReady] = useState(true);

    const history = useHistory()

    let handleClick = (answer,idQuestion)=>{

        let questionCount = questionNum

        if (questionCount < 15) {
            
                    // get question from db 

                    axios.get(`${process.env.REACT_APP_URL_API}/question/getQuestion`)
                    .then(function (response) {

                        setQuestion(response.data)
                        setQuestionNum( questionCount + 1) 

                    }).catch(function (err) {
                    console.log(err);
                });



                //   create round 

                let idGroup = localStorage.getItem("group_id");
                let id_participant = localStorage.getItem("idParticipant");




                const round = { 
                    id_question : idQuestion ,
                    id_participant : id_participant, 
                    participant_answer :answer

                    };

            

                axios.post(`${process.env.REACT_APP_URL_API}/round/createRound/${idGroup}`, round)
                .then(res => {

                
                
                
                })
            
        }else{

        let idGroup = localStorage.getItem("group_id");
        let token = localStorage.getItem("token");


        


        // check if we have 4 palyer ...

        axios.post(`${process.env.REACT_APP_URL_API}/winner/add/${idGroup}`)
        .then(function (response) {




        localStorage.setItem('idWinner' , response.data.id_participant)
        localStorage.setItem('idGift' , response.data.gift)
        
        
         
            
          
            
        
        }).catch(function (err) {
          console.log(err);
      });

        

           

            history.push('/winner')

        }



 

        
    }

    useEffect(()=>{

        let idGroup = localStorage.getItem("group_id");


        // check if we have 4 palyer ...

        axios.get(`${process.env.REACT_APP_URL_API}/round/createRound/${idGroup}`)
        .then(function (response) {


         if(!response.data.error){
            setParticipantReady(false)
         }
         
        
        
         
            
          
            
        
        }).catch(function (err) {
          console.log(err);
      });

        
       
        // console.log(numQuestion);

        axios.get(`${process.env.REACT_APP_URL_API}/question/getQuestion`)
        .then(function (response) {
        
         
            setQuestion(response.data)
          
            
        
        }).catch(function (err) {
          console.log(err);
      });
      
      },[])




    return ( 
        <div className="play">
            
            {participantReady ? (
                 <div className="endGame">
                 <h1>You need 4 player to Start the game ! </h1>
             </div>
            ):(
                <>
                    <div className="container ">
                <p>{questionNum} /15</p>
            {/* <h3>He is Light Yagami. He is the main character of ….. anime.</h3> */}

            <h3>{ question && question.question}</h3>

            

                <div className="row justify-content-around">
                    <div className="col-4">
                    
                    <button type="button" onClick={()=>{ handleClick(question.answer,question._id) }}   className="btn btn-light ">{ question && question.answer} </button>
                    </div>
                    <div className="col-4">
                    
                    <button type="button"  onClick={()=>{ handleClick(question && question.false_choices[0],question._id) }}  className="btn btn-light">{ question && question.false_choices[0]}</button>
                    
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-4">
                    
                    <button type="button"  onClick={()=>{ handleClick(question && question.false_choices[1],question._id) }}  className="btn btn-light">{ question && question.false_choices[1]}</button>
                    </div>
                    <div className="col-4">
                    
                    <button type="button"  onClick={()=>{ handleClick(question && question.false_choices[2],question._id) }}  className="btn btn-light">{ question && question.false_choices[2]}</button>
                    </div>
                </div>
            </div>
                </>
            )


            
            }

           


       
        
            
        </div>
     );
}
 
export default Play;
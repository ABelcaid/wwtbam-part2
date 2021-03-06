import './game.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Play = () => {

    const [question , setQuestion] = useState(null);
    const [questionNum , setQuestionNum] = useState(1);
    const [questionEnd , setQuestionEnd] = useState(false);


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

                    console.log('====================================');
                    console.log(res.data);
                    console.log('====================================');
                
                
                
                })
            
        }else{

            setQuestionEnd(true)

        }



 

        
    }

    useEffect(()=>{

        
       
        // console.log(numQuestion);

        axios.get(`${process.env.REACT_APP_URL_API}/question/getQuestion`)
        .then(function (response) {


         console.log('*********************************');
         console.log(response.data);
         console.log('*********************************');
        
         
            setQuestion(response.data)
          
            
        
        }).catch(function (err) {
          console.log(err);
      });
      
      },[])




    return ( 
        <div className="play">
            
            {questionEnd ? (
                 <div className="endGame">
                 <h1>Game over </h1>
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
            )}

           


       
        
            
        </div>
     );
}
 
export default Play;
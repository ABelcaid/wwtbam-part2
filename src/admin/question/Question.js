import { useState } from 'react';
import axios from 'axios';

const Question = () => {

    const [question ,setQuestion] = useState('');
    const [answer ,setAnswer] = useState('');
    const [false_choices,setFalseChoices] = useState('');
    const [points,setPoints] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
  
      

      let token = localStorage.getItem("token");

      let false_choices_array = false_choices.split(",");


const questions = {
    question : question,
    answer : answer,
    false_choices : false_choices_array,
    points : points
};
  
   
  
      axios.post(`http://localhost:8080/question/addQuestion`, questions, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }}
      )
      .then(res => {
        console.log(res.data);
       
        
       
      })
  
    }



    return ( 



        <div className="Question">
            <h1>Add Question</h1>

            <div className="addForm">
            <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Question</label>
          <input
           type="text" 
           className="form-control"  
           placeholder="Enter Question" 
           value={question}
           onChange={(e)=> setQuestion(e.target.value)}
           
           />
        </div>
      
        <div className="form-group">
          <label >Answer</label>
          <input
           type="text" 
           className="form-control"  
           placeholder="Enter Answer" 
           value={answer}
           onChange={(e)=> setAnswer(e.target.value)}
           
           />
        </div>
        <div className="form-group">
          <label >false choices</label>
          <input
           type="text" 
           className="form-control"  
           placeholder="Enter false choices" 
           value={false_choices}
           onChange={(e)=> setFalseChoices(e.target.value)}
           
           />
        </div>
        <div className="form-group">
          <label >Points</label>
          <input
           type="text" 
           className="form-control"  
           placeholder="Enter Points" 
           value={points}
           onChange={(e)=> setPoints(e.target.value)}
           
           />
        </div>
      
        
        <button type="submit" className="btn btn-primary">Add New Question</button>
      </form>
            </div>
        </div>
     );
}
 
export default Question;
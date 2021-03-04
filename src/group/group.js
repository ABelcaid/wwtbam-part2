import { Link, useHistory } from "react-router-dom";

import axios from 'axios';

const Group = () => {

    const history = useHistory()

   

    let createGroup = ()=> {

        let id_participant =  localStorage.getItem('idParticipant');
        let participantToken = localStorage.getItem("participantToken");


        axios.post('http://localhost:8080/group/newGroup', {id_participant : id_participant } , {
            headers: {
              'Authorization': `Bearer ${participantToken}` 
            }}
          )
          .then(res => {
            console.log(res.data);
            

            let group_code = res.data.group_code;
            let group_id = res.data._id;
            
      
            localStorage.setItem("group_code", group_code);
            localStorage.setItem("group_id", group_id);
           
            history.push('/createGroup')
           
            
           
          }).catch(function (err) {
          console.log(err);
      });

    }
    



    return ( 
        <div className="group">
            <h1>welcome to the jumanji .....</h1>

            
            <button type="button" className="btn btn-primary" onClick={createGroup}>Create new Group</button>

            

            <Link to={'/joinGroup'}>
            <button type="button" className="btn btn-secondary">Join Group</button>

            </Link>

        </div>
     );
}
 
export default Group;
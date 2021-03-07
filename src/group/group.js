import { Link, useHistory,withRouter } from "react-router-dom";
import './group.css';
import axios from 'axios';



const Group = () => {

    const history = useHistory()

   

    let createGroup = ()=> {

        let id_participant =  localStorage.getItem('idParticipant');
        let participantToken = localStorage.getItem("token");


       

        axios.post(`${process.env.REACT_APP_URL_API}/group/newGroup`, {id_participant : id_participant } , {
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
            <h1>What do you want to do ?</h1>

            <div className="btnGroup">


              
                  <button type="button" className="btn " onClick={createGroup}>Create new Group</button>

                  

                    <Link to={'/joinGroup'}>
                    <button type="button" className="btn">Join Group</button>

                    </Link>
            </div>

            
          

        </div>
     );
}
 
export default withRouter(Group);
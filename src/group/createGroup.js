import { Link } from "react-router-dom";


const CreateGroup = () => {

   

    let group_code =  localStorage.getItem('group_code');

    


  
    return ( 
        <div className="createGroup">
             <h1>the Group was created , use this code : <b>{group_code}</b>   to invit your friend  </h1>

             <Link to={'/play'}>
            <button type="button" className="btn btn-secondary">Play</button>

            </Link>
            
        </div>
     );
}
 
export default CreateGroup;
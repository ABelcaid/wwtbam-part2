import { Link } from "react-router-dom";
import './admin.css';

const Admin = () => {
    return ( 
        <div className="admin">
            <h1>What do you want to do ? </h1>
            <div className="btnGroup">
                <Link to={'/admin/validateParticipant'}>
                    <button type="button" className="btn">Validate Participation</button>
                </Link>
                <Link to={'/admin/addAdmin'}>
                    <button type="button" className="btn">Add Admin</button>
                </Link>
                <Link to={'/admin/addQuestion'}>
                    <button type="button" className="btn">Add Question</button>
                </Link>
            </div>


            
            
        </div>
     );
}
 
export default Admin;
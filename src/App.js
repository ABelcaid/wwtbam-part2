import './App.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';

import Login from './loginParticipant/Login';
import Register from './loginParticipant/Register';
import LoginAdmin from './admin/loginAdmin/Login';
import AddAdmin from './admin/addAdmins/AddAdmin';
import Question from './admin/question/Question';
import ValidateParticipant from './admin/validateParticipation/ValidateParticipant';
import Group from './group/group';
import CreateGroup from './group/createGroup';
import JoinGroup from './group/joinGroup';
import Play from './game/Play';
import ProtectedRoute from './auth/ProtectedRoute';
import Admin from './admin/Admin';
import Winner from './winner/Winner';





function App() {

  
  return (
    <Router>
         <div className="App">
      <Switch>

        



        <Route exact path="/" component={Login} />

        <Route exact path="/register" component={Register} />

        <Route exact path="/admin/login" component={LoginAdmin} />
        
        <ProtectedRoute path='/admin/addAdmin' exact component={AddAdmin} />

        <ProtectedRoute path='/admin/addQuestion' exact component={Question} />

        <ProtectedRoute path='/admin/validateParticipant' exact component={ValidateParticipant} />
      

        <ProtectedRoute path='/admin/home' exact component={Admin} />

        


        <ProtectedRoute path='/group' exact component={Group} />

        <ProtectedRoute path='/createGroup' exact component={CreateGroup} />

        <ProtectedRoute path='/joinGroup' exact component={JoinGroup} />

        <ProtectedRoute path='/play' exact component={Play} />

        <ProtectedRoute path='/winner' exact component={Winner} />

      </Switch>
    </div>
    </Router>
 
  );
}

export default App;

import './App.css';
import Login from './loginParticipant/Login';
import Register from './loginParticipant/Register';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import LoginAdmin from './admin/loginAdmin/Login';
import AddAdmin from './admin/addAdmins/AddAdmin';
import Question from './admin/question/Question';
import ValidateParticipant from './admin/validateParticipation/ValidateParticipant';
import Group from './group/group';
import CreateGroup from './group/createGroup';
import JoinGroup from './group/joinGroup';


function App() {
  return (
    <Router>
         <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/admin/login">
          <LoginAdmin />
        </Route>
        <Route exact path="/admin/addAdmin">
          <AddAdmin />
        </Route>
        <Route exact path="/admin/addQuestion">
          <Question />
        </Route>
        <Route exact path="/admin/validateParticipant">
          <ValidateParticipant />
        </Route>
        <Route exact path="/group">
          <Group />
        </Route>
        <Route exact path="/createGroup">
          <CreateGroup />
        </Route>
        <Route exact path="/joinGroup">
          <JoinGroup />
        </Route>
      </Switch>
    </div>
    </Router>
 
  );
}

export default App;

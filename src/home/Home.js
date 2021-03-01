import Login from '../login/Login';
import Register from '../login/Register';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';

const Home = () => {
    return (
    <Router>
        <div className="home">
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
            </Switch>
        </div>

    </Router>
     
     );
}
 
export default Home;
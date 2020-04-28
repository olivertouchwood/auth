import React from 'react';
import './App.css';
import Users from "./components/Users";
import Products from "./components/Products";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, withRouter, useHistory, useLocation,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import {fakeAuth} from "./auth/Auth";
import Logout from "./components/Logout";


// const LogoutButton = withRouter(({ history }) => (
//     <button type='button' onClick={() => { fakeAuth.signout(() => {history.push('/') }) }}>
//       Logout
//     </button>
// ));

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {isLoggedIn: fakeAuth.isAuthenticated};
  }


  render() {




    return (
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <Link to="/" className="navbar-brand">Brand</Link>
              <button className="navbar-toggler">
                <span className="navbar-toggler-icon" data-toggle="collapse" data-target="#navBarMenu"></span>
              </button>
              <div className="collapse navbar-collapse" id="navBarMenu">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/products">Products</Link>
                  </li>
                  <li>
                    <p>{this.state.isLoggedIn}</p>
                  </li>
                </ul>
              </div>
            </nav>

            <Switch>
              <Route exact path="/">
                <p>Home</p>
              </Route>
              <Route path="/login">

                <div>
                  <p>You must log in to view the page</p>
                  <button onClick={() => {

                    let history = useHistory();
                    let location = useLocation();
                    let { from } = location.state || { from: { pathname: "/" } };


                    fakeAuth.authenticate(() => {
                      history.replace(from);
                      this.setState({isLoggedIn: fakeAuth.isAuthenticated});
                    });
                  }}>Log in</button>
                </div>


                {/*<Login/>*/}
              </Route>
              <PrivateRoute path="/users">
                <Users/>
              </PrivateRoute>
              <Route path="/products">
                <Products/>
              </Route>
            </Switch>

          </div>
        </Router>
    );
  }
}

export default App;

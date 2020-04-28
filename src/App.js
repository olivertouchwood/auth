import React from 'react';
import './App.css';
import Users from "./components/Users";
import Products from "./components/Products";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


class App extends React.Component {

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
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                  </li>
                  <li>
                    <Logout/>
                  </li>
                </ul>
              </div>
            </nav>

            <Switch>
              <Route exact path="/">
                <p>Home</p>
              </Route>
              <Route path="/login">
                <Login/>
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

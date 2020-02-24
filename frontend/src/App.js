import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login'
import Registration from './components/Registration'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Registration />
          </Route>
          <Route path="/user">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

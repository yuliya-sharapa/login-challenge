import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { UserList } from './components/UserList'
import { Login } from './components/LoginForm'
import { EditUser } from './components/EditUser'

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li classNamfe="navbar-item">
            <Link to="/" className="nav-link">Users Dashboard</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="nav-link">Sign Out</Link>
          </li>
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={UserList}/>
      <Route path="/edit/:id" component={EditUser}/>
      <Route path="/login" component={Login}/>
    </Switch>
    </div>
  );
}

export default App;

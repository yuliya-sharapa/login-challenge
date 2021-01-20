import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { UserList } from './components/UserList'
import { LoginForm } from './components/LoginForm'
import { EditUser } from './components/EditUser'
import { CreateUser } from './components/CreateUser'



function App() {

  return (
    <>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Users Dashboard</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Sing Up</Link>
          </li>
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={UserList}/>
      <Route path="/edit/:id" component={EditUser}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/create" component={CreateUser}/>
    </Switch>
    </>
  );
}

export default App;

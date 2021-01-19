import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { UserList } from './components/UserList'
import { LoginForm } from './components/LoginForm'
import { EditUser } from './components/EditUser'
import UserContext from './context/UserContext'


function App() {
  const [userData, setUserData] =useState({
    user: undefined
  })

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
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
      <Route path="/login" component={LoginForm}/>
    </Switch>
    </UserContext.Provider>
  );
}

export default App;

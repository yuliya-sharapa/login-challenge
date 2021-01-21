import React from 'react';
import { Route, Switch} from 'react-router-dom'
import { UserList } from './components/UserList'
import { LoginForm } from './components/LoginForm'
import { EditUser } from './components/EditUser'
import { CreateUser } from './components/CreateUser'
import NavBar from './components/NavBar'



function App() {

  return (
    <>
    <NavBar/>
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

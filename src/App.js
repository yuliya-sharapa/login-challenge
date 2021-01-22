import React, {useState, useEffect} from 'react';
import { Route, Switch} from 'react-router-dom'
import { UserList } from './components/UserList'
import { LoginForm } from './components/LoginForm'
import { EditUser } from './components/EditUser'
import { CreateUser } from './components/CreateUser'
import NavBar from './components/NavBar'
import UserContext from './context/UserContext'
import {tokenRes, getUserByToken} from './api'
import Home from './components/Home'



function App() {
  
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(()=>{
    const checkLoggedIn = async () =>{
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      let tokenExists;
      await tokenRes(token).then((data => {
        tokenExists = data;
      }))
      console.log(tokenExists)
      
      if(tokenExists){
        await getUserByToken(token).then(user=>{
          setUserData({
            token,
            user
          })
        })
      } 
    }
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{userData, setUserData}}>
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Home}/>
      <Route path="/users" component={UserList}/>
      <Route path="/edit/:id" component={EditUser}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/create" component={CreateUser}/>
    </Switch>
    </UserContext.Provider>
  );
}

export default App;

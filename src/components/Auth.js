import React, {useContext} from 'react'
import {useHistory} from "react-router-dom"
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom'

export default function Auth() {
    const {userData, setUserData} = useContext(UserContext);
    const history = useHistory();

    const register =()=> history.push("/create");
    const login =()=> history.push("/login");
    const logout =()=> {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
        history.push("/");
    };

    return (
        <>
        {
            userData.user ? (
                <>
                <button onClick={logout} className="btn btn-outline-secondary mr-1">Log out</button>
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/users" className="nav-link">Users Dashboard</Link>
                </li>
                </ul>
                </>
            ) : (
                <>
                <button onClick={register} className="btn btn-outline-secondary mr-1">Register</button>
                <button onClick={login} className="btn btn-secondary">Log in</button>
                </>
            )
        } 
        </>
    )
}

import React from 'react'
import {useHistory} from "react-router-dom"

export default function Auth() {
    const history = useHistory();

    const register =()=> history.push("/create");
    const login =()=> history.push("/login");

    return (
        <div className="mr-3">
            <button onClick={register} className="btn btn-outline-secondary mr-1">Register</button>
            <button onClick={login} className="btn btn-secondary">Log in</button>
        </div>
    )
}

import React, {useState, useEffect} from "react";
import {EditForm} from './EditForm'

export const EditUser = () => {

  const [user, setUserData] = useState();

  useEffect(()=>{
      setUserData({
        id: "0",
        name: "User",
        last_name: "Userovich",
        email: "user@gmail.com",
        dni: "99999999",
        address: "Colon 1000",
      })
  }, []);

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return user ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit a user</h3>
        <EditForm user={user} onSubmit={onSubmit} />
      </div>
    </div> ) : (
      <div>Loading...</div>
    );
};
import React, {useState, useEffect} from "react";
import {UserForm} from './UserForm';
import { useRouteMatch, useHistory} from "react-router-dom";
import { getUser, updateUser } from "../api";

export const EditUser = () => {

  const match = useRouteMatch();
  const history = useHistory();
  const [user, setUserData] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(match.params.id);
      setUserData(user)
    }
    fetchUser()
  }, []);

  const onSubmit = async (data) => {
    console.log(data, match.params.id)
    await updateUser(data, match.params.id).then(()=>console.log("sussecc"))
    history.push("/users")
  }

  return user ? (
    <div className="container">
      <div className="mt-3">
        <h3 className="text-center">Edit a user</h3>
        <UserForm user={user} onSubmit={onSubmit} />
      </div>
    </div> ) : (
      <div>Loading...</div>
    );
};
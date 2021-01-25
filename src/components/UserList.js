import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit, FiTrash2, FiBarChart2 } from "react-icons/fi";
import {getUsers, deleteUser} from "../api"


export const UserList = () => {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(()=>{
      getUsers().then((users)=> setUsers(users))
    }, [users])

    const onDelete = async (id) => {
      deleteUser(id).then(() => console.log('Delete successful'));
      history.push("/users")
    };

    return (
        <div className="container">
          <div className="mt-3">
            <h3>User List</h3>
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>DNI</th>
                  <th>Registration Date</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user => (
                    <tr key={user._id}>
                      <td>
                        {user.name}
                      </td>
                      <td>
                        {user.lastName}
                      </td>
                      <td>
                        {user.email}
                      </td>
                      <td>
                        {user.dni}
                      </td>
                      <td>
                        {user.time}
                      </td>
                      <td>
                        {user.address}
                      </td>
                      <td>
                        <Link to={`/edit/${user._id}`}> <FiEdit/> </Link>
                        <FiTrash2 role="button" className="text-primary" onClick={()=>onDelete(user._id)}/>
                        <Link to={`/statistics/${user._id}`}> <FiBarChart2/> </Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      );
}
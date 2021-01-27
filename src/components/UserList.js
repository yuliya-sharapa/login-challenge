import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit, FiTrash2, FiBarChart2, FiSearch } from "react-icons/fi";
import {getUsers, deleteUser} from "../api";
import Moment from 'react-moment';


export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [q, setQ] = useState("")
    const history = useHistory();

    useEffect(()=>{
      getUsers().then((users)=> setUsers(users))
    }, [users])

    const search = (rows) => {
      return rows.filter((row)=> 
      row.lastName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      row.name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      row.address.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      row.dni.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      row.email.toLowerCase().indexOf(q.toLowerCase()) > -1 
      );
    }

    const onDelete = async (id) => {
      deleteUser(id).then(() => console.log('Delete successful'));
      history.push("/users")
    };

    return (
        <div className="container">
            <div className="mt-3">
              <h3>User List</h3>
              <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4 w-25 mt-3">
              <div class="input-group">
                <input type="search" placeholder="Search" aria-describedby="button-addon1" class="form-control border-0 bg-light" value={q} onChange={(e)=>setQ(e.target.value)}/>
                <div class="input-group-append">
                  <button id="button-addon1" class="btn btn-link text-primary"><FiSearch /></button>
                </div>
              </div>
            </div>
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
                  search(users).map(user => (
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
                        <Moment format="D MMM YYYY hh:mm">{user.time}</Moment>
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
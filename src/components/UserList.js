import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export const UserList = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        setItems([
            {
                is: "0",
                name: "User",
                last_name: "Userovich",
                email: "user@gmail.com",
                dni: "99999999",
                created_at: "20-20-20",
                address: "Colon 1000",
            },
            {
                is: "1",
                name: "User1",
                last_name: "Userovich1",
                email: "user1@gmail.com",
                dni: "99999991",
                created_at: "20-20-21",
                address: "Colon 1001",
            },{
                is: "2",
                name: "User2",
                last_name: "Userovich2",
                email: "user2@gmail.com",
                dni: "99999992",
                created_at: "20-20-22",
                address: "Colon 1002",
            }
        ])
    }, [])

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
                  items.map(user => (
                    <tr key={user.id}>
                      <td>
                        {user.name}
                      </td>
                      <td>
                        {user.last_name}
                      </td>
                      <td>
                        {user.email}
                      </td>
                      <td>
                        {user.dni}
                      </td>
                      <td>
                        {user.created_at}
                      </td>
                      <td>
                        {user.address}
                      </td>
                      <td>
                        <Link to={`/edit`}>Edit </Link>
                        <Link to={`/`}>Delete </Link>
                        <Link to={`/`}>Statistics </Link>
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
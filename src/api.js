export const getUsers = () => fetch("http://localhost:5000/users/").then(res => res.json());

export const createUser = (user) => fetch("http://localhost:5000/users/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})

export const updateUser = (user, id) => fetch(`http://localhost:5000/users/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})  

export const deleteUser = (id) => fetch(`http://localhost:5000/users/${id}`, {
  method: "DELETE",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})

export const getUser = (id) => fetch(`http://localhost:5000/users/${id}`).then(res => res.json())

export const tokenRes = (token) => fetch(`http://localhost:5000/auth/tokenIsValid`, {
  method: "POST",
  headers: {
    "x-auth-token": token
  }
}).then(res => res.json()); 

export const getUserByToken = (token) => fetch(`http://localhost:5000/auth/`, {
  method: "GET",
  headers: {
    "x-auth-token": token
  }
}).then(res => res.json()); 

export const loginRes = (user) => fetch(`http://localhost:5000/users/login`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
}).then(res => res.json()); 
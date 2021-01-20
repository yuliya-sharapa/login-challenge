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

export const getUser = (id) => fetch(`http://localhost:5000/users/${id}`).then(res => res.json())
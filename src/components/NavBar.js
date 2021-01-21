import React from 'react'
import { Link } from 'react-router-dom'
import Auth from './Auth'

export default function NavBar() {
    return (
            <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Users Dashboard</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Sing Up</Link>
          </li>
          </ul>
            <Auth />
          
        
      </nav>
        
    )
}

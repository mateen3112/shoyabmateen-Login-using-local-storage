import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css"// Import Link component

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/registration">Registration</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

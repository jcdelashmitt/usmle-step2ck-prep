import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/internal-medicine">Internal Medicine</Link></li>
        <li><Link to="/surgery">Surgery</Link></li>
        <li><Link to="/pediatrics">Pediatrics</Link></li>
        <li><Link to="/obgyn">Obstetrics & Gynecology</Link></li>
        <li><Link to="/psychiatry">Psychiatry</Link></li>
        <li><Link to="/biostats">Biostatistics & Social Science</Link></li>
        <li><Link to="/study-plan">Study Plan</Link></li>
        <li><Link to="/quiz">Quiz Section</Link></li>
        <li><Link to="/account">User Account</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

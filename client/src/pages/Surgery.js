import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Surgery = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Surgery</h1>
      </header>
      <main>
        <ul>
          <li><Link to="/surgery/preoperative-care">Preoperative and Postoperative Care</Link></li>
          <li><Link to="/surgery/trauma">Trauma</Link></li>
          <li><Link to="/surgery/general">General Surgery</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default Surgery;

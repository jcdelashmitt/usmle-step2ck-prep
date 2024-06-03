import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ObGyn = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Obstetrics & Gynecology</h1>
      </header>
      <main>
        <ul>
          <li><Link to="/obgyn/pregnancy-complications">Pregnancy Complications</Link></li>
          <li><Link to="/obgyn/gynecological-disorders">Gynecological Disorders</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default ObGyn;

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Pediatrics = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Pediatrics</h1>
      </header>
      <main>
        <ul>
          <li><Link to="/pediatrics/neonatology">Neonatology</Link></li>
          <li><Link to="/pediatrics/growth-development">Growth and Development</Link></li>
          <li><Link to="/pediatrics/emergencies">Pediatric Emergencies</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default Pediatrics;

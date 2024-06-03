import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const InternalMedicine = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Internal Medicine</h1>
      </header>
      <main>
        <ul>
          <li><Link to="/internal-medicine/cardiology">Cardiology</Link></li>
          <li><Link to="/internal-medicine/pulmonology">Pulmonology</Link></li>
          <li><Link to="/internal-medicine/gastroenterology">Gastroenterology</Link></li>
          <li><Link to="/internal-medicine/endocrinology">Endocrinology</Link></li>
          <li><Link to="/internal-medicine/nephrology">Nephrology</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default InternalMedicine;

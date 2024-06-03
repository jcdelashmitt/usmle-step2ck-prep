import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Biostats = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Biostatistics & Social Science</h1>
      </header>
      <main>
        <ul>
          <li><Link to="/biostats/study-designs">Study Designs</Link></li>
          <li><Link to="/biostats/statistical-tests">Statistical Tests</Link></li>
          <li><Link to="/biostats/bias-confounding">Bias and Confounding</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default Biostats;

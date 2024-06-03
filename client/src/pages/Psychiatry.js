import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Psychiatry = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Psychiatry</h1>
      </header>
      <main>
        <ul>
          <li><Link to="/psychiatry/mood-disorders">Mood Disorders</Link></li>
          <li><Link to="/psychiatry/anxiety-disorders">Anxiety Disorders</Link></li>
          <li><Link to="/psychiatry/psychotic-disorders">Psychotic Disorders</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default Psychiatry;

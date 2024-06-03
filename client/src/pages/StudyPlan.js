import React from 'react';
import Navbar from '../components/Navbar';

const StudyPlan = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Study Plan</h1>
      </header>
      <main>
        <h3>Suggested Study Schedules</h3>
        <p>Daily, weekly, and monthly plans...</p>
        <h3>Additional Resources</h3>
        <ul>
          <li>Videos</li>
          <li>Articles</li>
          <li>External Study Guides</li>
        </ul>
      </main>
    </div>
  );
};

export default StudyPlan;

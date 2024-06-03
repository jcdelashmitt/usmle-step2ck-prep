import React from 'react';
import Navbar from '../components/Navbar';

const QuizSection = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Quiz Section</h1>
      </header>
      <main>
        <h3>Practice Questions and Answers</h3>
        <p>Multiple-choice format...</p>
        <h3>Timed Quizzes</h3>
        <p>Simulate exam conditions with a countdown timer...</p>
      </main>
    </div>
  );
};

export default QuizSection;

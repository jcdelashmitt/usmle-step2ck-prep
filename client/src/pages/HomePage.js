import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Welcome to the Ultimate USMLE Step 2 CK Study Resource!</h1>
      </header>
      <main>
        <p>Explore our high-yield topics, mnemonics, interactive algorithms, and much more to ace your Step 2 CK exam.</p>
      </main>
      <footer>
        <p>Contact Information | Links to Resources | Social Media Links</p>
      </footer>
    </div>
  );
};

export default HomePage;

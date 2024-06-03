import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const UserAccount = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <Navbar />
      <header>
        <h1>User Account</h1>
      </header>
      <main>
        {user ? (
          <div>
            <h3>Welcome, {user.name}</h3>
            <p>Email: {user.email}</p>
            <h3>Study Progress</h3>
            <p>Progress tracking dashboard...</p>
          </div>
        ) : (
          <p>Please log in to view your account.</p>
        )}
      </main>
    </div>
  );
};

export default UserAccount;

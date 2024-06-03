import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('User logged in successfully');
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  return (
    <div>
      <Navbar />
      <header>
        <h1>Login</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </main>
    </div>
  );
};

export default Login;

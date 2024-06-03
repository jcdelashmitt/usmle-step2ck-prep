import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/register', { name, email, password });
      setMessage('User registered successfully');
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  return (
    <div>
      <Navbar />
      <header>
        <h1>Register</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
        {message && <p>{message}</p>}
      </main>
    </div>
  );
};

export default Register;

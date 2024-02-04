import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // UseNavigate in order to send to signup, useHistory broken for some reason
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api-dev.quicklyinc.com/auth/login', { // inks to API
        email,
        password
      });
      localStorage.setItem('token', response.data.jwtToken);
      navigate('/profile'); 
    } catch (error) {
      console.error('Error during login:', error); // tells the they have error
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Login</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p> 
    </div>
  ); // added hyperlink to signup
}

export default Login;

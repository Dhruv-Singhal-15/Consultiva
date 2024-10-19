import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Axios.post('http://localhost:8000/auth/login', { email, password },
        { withCredentials: true }
      )
        .then(Response => {
          if (Response.data.status) {
            navigate('/dashboard');
          }
          else {
            alert(Response.data.message);
          }
        });
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  // const loginwithgoogle = () => {
  //   window.open("http://localhost:8000/auth/google/callback", "_self");
  // };

  return (
    <>
      <div className="login-page">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email" name="" 
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="" 
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <p className="message">
              Not Registerd? <Link to="/register">Create an account</Link>
              <br />
              Forgot Password? <Link to="/forgotPassword">Click here</Link>
            </p>
          </form>
          {/* <button className="login-with-google-btn" onClick={loginwithgoogle}>
            Sign In With Google
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Login;

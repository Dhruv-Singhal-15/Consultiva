import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const loginwithgoogle = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
  };
  return (
    <>
      <div className="login-page">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <div className="form">
          <form className="login-form">
            <input type="text" name="" id="" placeholder="username" />
            <input type="password" name="" id="" placeholder="password" />
            <button>Login</button>
            <p className="message">
              Not Registerd? <Link to="/register">Create an account</Link>
              <br />
              Forgot Password? <Link to="/forgotPassword">Click here</Link>
            </p>
          </form>
          <button className="login-with-google-btn" onClick={loginwithgoogle}>
            Sign In With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

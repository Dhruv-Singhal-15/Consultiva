import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            Axios.post('http://localhost:8000/auth/signup', { username, email, password })
                .then(Response => {
                    if (Response.data.status) {
                        navigate('/login');
                    }
                });
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <>
            <div className="login-page">
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <div className="form">

                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" name=""
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input type="email" name=""
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input type="password" name=""
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type='submit'>Submit</button>
                        <p className="message">
                            Already Registerd? <Link to="/login">Login</Link>
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Register
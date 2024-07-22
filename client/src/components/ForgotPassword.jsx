import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/entering.css'; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            Axios.post('http://localhost:5001/auth/forgot-password', { email })
                .then(Response => {
                    if (Response.data.status) {
                        alert("Check your email for the reset link");
                        navigate('/resetPassword');
                    }else{
                        alert(Response.data.message);
                    }
                });
        } catch (error) {
            console.log(Response.data);
        }
    };

    return (
        <div className="forgot-password-container">
            <form onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default ForgotPassword;


import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles/entering.css'; 

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            Axios.post(`http://localhost:5001/auth/reset-password/${token}`, { password })
                .then(response => {
                    if (response.data.status) {
                        alert("Password changed successfully");
                        navigate('/login');
                    } else {
                        alert("Link expired");
                    }
                    console.log(response.data);
                });
        } catch (error) {
            console.error('Password reset failed!', error);
        }
    };

    return (
        <div className="reset-password-container">
            <form onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default ResetPassword;

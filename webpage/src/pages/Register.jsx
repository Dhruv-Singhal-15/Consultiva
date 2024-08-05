import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="register-page">
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <div className="form">
                    <form className="login-form">
                        <input type="text" name="" id="" placeholder="username" />
                        <input type="email" name="" id="" placeholder="email" />
                        <input type="password" name="" id="" placeholder="password" />
                        <button>Login</button>
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
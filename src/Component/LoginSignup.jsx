import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
    const [user, setUser] = useState({
        userId: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const req = await fetch("http://localhost:3005/login", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const response = await req.json();
            console.log(response);
            alert("login Successfully")
            if (!req.ok) {
                throw new Error('Network response was not ok');
            }
        }catch (error) {
            console.error(error.message); 
        }
    };

    return (
        <div className='loginSignup'>
            <div className='login' >
                <h1>Login</h1>
                <div className="login-fields">
                    <input type="text" placeholder='User Id' name="userId" onChange={handleChange} /><br />
                    <input type="password" placeholder='Password' name="password" onChange={handleChange} />
                </div>
                <Link style={{ textDecoration: 'none', marginLeft: '15px' }} to='/forgot-password'>Forgot password</Link>

                <div className="login-btn">
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <div>
                    <h4>Don't have an account? <Link to='/signup' style={{ textDecoration: 'none' }}>Signup here</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
import React, { useState } from 'react';
import './loginForm.css';

function LoginForm({ onLoginSuccess, rememberMe, setRememberMe }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate login success
        if (email === 'user@example.com' && password === 'password') {
            onLoginSuccess();
        }
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <p className='login'>Login</p>
                    <label className="form-label" htmlFor="form2Example1">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="form2Example1"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="form2Example2"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />

                <button type="submit" className="btn btn-primary btn-block mb-4">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default LoginForm;

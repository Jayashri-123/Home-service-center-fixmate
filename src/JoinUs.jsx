import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const JoinUs = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [result, setResult] = useState('');

  function validateUser() {
    if (password === confirmPassword && password !== '') {
      setResult('✅ Account created successfully!');
    } else {
      setResult('❌ Passwords do not match');
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h3 className="text-center text-primary mb-4">Create an Account</h3>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Create password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label">Confirm password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button className="btn btn-primary w-100" onClick={validateUser}>
          Sign Up
        </button>

        {/* Result Message */}
        {result && (
          <p className="text-center mt-3 fw-bold">
            {result}
          </p>
        )}

        {/* Login Link */}
        <p className="text-center mt-3">
          Already have an account?{' '}
          <Link to="/Login" className="text-decoration-none fw-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ width: '380px' }}>
        <h4 className="text-center text-primary mb-4">Login</h4>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button className="btn btn-primary w-100 mt-2">
          Login
        </button>
      </div>
    </div>
  );
};

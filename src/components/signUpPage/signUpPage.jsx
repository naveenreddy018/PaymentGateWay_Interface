import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import assests from '../../assets/assets';

const SignUpPage = () => {
  return (
    <div className="vh-100 d-flex">
      {/* Left Panel */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-white"
        style={{ flex: 1 }}
      >
        <div className="text-center px-5">
          <img
            src={assests.jaimaxLogo}
            height={80}
            className="mb-4"
            alt="Jaisvik Gateway Logo"
          />
          <h2 className="fw-bold mb-3 text-dark">Join Jaisvik Gateway</h2>
          <p className="text-dark">
            Sign up to get started with secure, fast, and modern payment solutions for your business.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ flex: 1, backgroundColor: '#f9fafb' }}
      >
        <div className="p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h4 className="fw-bold text-center mb-4">Create an Account</h4>
          <div>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Full Name</label>
              <input
                type="text"
                id="nameInput"
                className="form-control"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email or Phone</label>
              <input
                type="text"
                id="emailInput"
                className="form-control"
                placeholder="you@example.com or 98765xxxxx"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input
                type="password"
                id="passwordInput"
                className="form-control"
                placeholder="********"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPasswordInput" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPasswordInput"
                className="form-control"
                placeholder="********"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Sign Up
            </button>
            <p className="text-center mt-4 small text-muted">
              By continuing, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms</a>.
            </p>
            <div className="text-center">
              <p className="small">Already have an account? <a href="#">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

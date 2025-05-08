import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import assests from '../../assets/assets';

const LoginPage = () => {
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
          <h2 className="fw-bold mb-3 text-dark">Welcome to Jaisvik Gateway</h2>
          <p className="text-dark">
            Secure, fast, and modern payment gateway for your business. Accept UPI, Cards, Netbanking & more.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ flex: 1, backgroundColor: '#f9fafb' }}
      >
        <div className="p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h4 className="fw-bold text-center mb-4">Login to Continue</h4>
          <div>
            <div className="mb-3">
              <label htmlFor="loginInput" className="form-label">Email or Phone</label>
              <input
                type="text"
                id="loginInput"
                className="form-control"
                placeholder="you@example.com or 98765xxxxx"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Continue
            </button>
            <div className="text-center text-muted">or</div>
            <button className="btn btn-outline-dark w-100 mt-3">
              Continue with Google
            </button>
            <p className="text-center mt-4 small text-muted">
              By continuing, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

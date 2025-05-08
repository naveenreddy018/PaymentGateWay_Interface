import React from "react";
import assests from "../../assets/assets";

const RazorpayLanding = () => {
  return (
    <div style={{ background: "#f7f9fc", fontFamily: "sans-serif" }}>
      {/* Navbar */}
      <div className="navbar" style={{ background: "#fff", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <div className="brand" style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ fontSize: "1.25rem", color: "#007bff", fontWeight: "bold", margin: 0 }}>JAISVIK PAY</h1>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a href="#">Payments</a>
          <a href="#">Products</a>
          <a href="#">Docs</a>
          <a href="#">Pricing</a>
          <a href="#">Support</a>
          <a href="#">About Us</a>
        </div>
        <div className="auth-buttons" style={{ display: "flex", gap: "8px" }}>
          <button style={{ border: "1px solid #007bff", background: "transparent", color: "#007bff", padding: "6px 12px", borderRadius: "4px" }}>Login</button>
          <button style={{ background: "#007bff", color: "#fff", padding: "6px 12px", border: "none", borderRadius: "4px" }}>Sign Up</button>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ maxWidth: "1140px", margin: "40px auto", padding: "0 16px", display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 50%", paddingRight: "20px" }}>
          <h1 style={{ color: "#007bff", fontWeight: "bold" }}>Accept Payments Instantly</h1>
          <h4 style={{ fontWeight: "600" }}>For Startups, SMBs, and Enterprises</h4>
          <p style={{ color: "#6c757d" }}>
            UPI, Cards, Netbanking, Wallets & more – integrated in one platform.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
            <button style={{ background: "#007bff", color: "#fff", padding: "8px 16px", border: "none", borderRadius: "4px" }}>Create Account</button>
            <button style={{ background: "none", border: "none", color: "#007bff" }}>Learn More</button>
          </div>
        </div>
        <div style={{ flex: "1 1 50%", textAlign: "center" }}>
          <img src={assests.jaisvikPayLogo} alt="Accept Payments" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>

      {/* I'm here to Section */}
      <div style={{ background: "#fff", margin: "0 auto 40px", maxWidth: "1140px", padding: "24px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <label style={{ fontWeight: "bold" }}>I'm here to</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "12px" }}>
          <button style={{ border: "1px solid #ccc", padding: "8px 12px", borderRadius: "4px", background: "transparent" }}>Accept Payments</button>
          <button style={{ border: "1px solid #ccc", padding: "8px 12px", borderRadius: "4px", background: "transparent" }}>Make Payments</button>
          <button style={{ border: "1px solid #ccc", padding: "8px 12px", borderRadius: "4px", background: "transparent" }}>Start Business Banking</button>
          <button style={{ border: "1px solid #ccc", padding: "8px 12px", borderRadius: "4px", background: "transparent" }}>Get Working Capital</button>
          <button style={{ border: "1px solid #ccc", padding: "8px 12px", borderRadius: "4px", background: "transparent" }}>Automate Payroll</button>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ maxWidth: "1140px", margin: "0 auto 40px", padding: "0 16px" }}>
        <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "24px" }}>Payment Gateway Features</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
          {[
            {
              icon: assests.upiIcon,
              title: "UPI",
              description: "Instant UPI payments with dynamic QR support.",
            },
            {
              icon: assests.cardspayment,
              title: "Cards",
              description: "Accept all major credit & debit cards.",
            },
            {
              icon: assests.netBanking,
              title: "Netbanking",
              description: "Supports 50+ banks in India for quick checkout.",
            },
          ].map((feature, index) => (
            <div key={index} style={{ flex: "1 1 30%", background: "#fff", padding: "24px", textAlign: "center", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <img src={feature.icon} alt={feature.title} height="100" style={{ marginBottom: "12px" }} />
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted by Section */}
      <div style={{ maxWidth: "1140px", margin: "40px auto", textAlign: "center" }}>
        <h4 style={{ fontWeight: "bold" }}>Trusted by 10,000+ Businesses</h4>
        <p style={{ color: "#6c757d" }}>Startups, Enterprises, MSMEs trust Jaisvik Pay</p>
        <img src="https://razorpay.com/build/browser/static/brands.20ef423c.png" alt="Trusted Brands" style={{ maxWidth: "100%", height: "auto" }} />
      </div>

      {/* CTA */}
      <div style={{ maxWidth: "1140px", margin: "40px auto", textAlign: "center" }}>
        <h3 style={{ fontWeight: "bold", marginBottom: "16px" }}>Start Accepting Payments in 5 Minutes</h3>
        <p style={{ color: "#6c757d" }}>
          Create a free account and go live instantly with Jaisvik Pay.
        </p>
        <button style={{ background: "#007bff", color: "#fff", padding: "10px 24px", fontSize: "16px", border: "none", borderRadius: "4px" }}>
          Get Started
        </button>
      </div>

      {/* Footer */}
      <div style={{ background: "#222", color: "#fff", padding: "40px 16px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px" }}>
          <div style={{ flex: "1 1 50%" }}>
            <h5>JAISVIK SOFTWARE</h5>
            <p>Revolutionizing payments for modern businesses.</p>
          </div>
          <div>
            <h6>Company</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "#fff" }}>About Us</a></li>
              <li><a href="#" style={{ color: "#fff" }}>Careers</a></li>
              <li><a href="#" style={{ color: "#fff" }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h6>Solutions</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "#fff" }}>Payment Gateway</a></li>
              <li><a href="#" style={{ color: "#fff" }}>Payouts</a></li>
              <li><a href="#" style={{ color: "#fff" }}>Payroll</a></li>
            </ul>
          </div>
        </div>
        <hr style={{ borderColor: "#555" }} />
        <p style={{ textAlign: "center", marginTop: "16px" }}>
          © 2025 Jaisvik Software Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default RazorpayLanding;

import React, { useState } from "react";
import assests from "../../assets/assets";
import PaymentFeatures from "../Feature1/Feature";
import Resources from "../PaymentFeatures/Resources";
import PayrollMenu from "../PaymentFeatures/Payroll";

const Header = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [resourcesFeatures, setResourcesFeatures] = useState(false);
  const [payroll, setPayroll] = useState(false);
  const [AboutJaisvik, setAboutJaisvik] = useState(false);

  const navLinkStyle = {
    position: "relative",
    left : 
    padding: "8px",
    cursor: "pointer",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    transition: "color 0.3s",
  };

  const navLinkHoverStyle = {
    ...navLinkStyle,
    color: "#007bff",
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1
          style={{
            fontSize: "1.25rem",
            color: "#007bff",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          JAISVIK PAY
        </h1>
      </div>

      <div
        style={{ display: "flex", gap: "20px", alignItems: "center", position: "relative" }}
      >
        {/* Resources Dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setResourcesFeatures(true)}
          onMouseLeave={() => setResourcesFeatures(false)}
        >
          <a style={navLinkStyle}>Resources</a>
          {resourcesFeatures && (
            <div
              style={{
                position: "absolute",
                top: "32px",
                left: "-200px",
                zIndex: 1000,
                borderRadius: "8px",
                minWidth: "900px",
              }}
            >
              <PaymentFeatures />
            </div>
          )}
        </div>

        <a href="#" style={navLinkStyle}>
          Products
        </a>

        {/* Payment Dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowFeatures(true)}
          onMouseLeave={() => setShowFeatures(false)}
        >
          <a style={navLinkStyle}>Payments</a>
          {showFeatures && (
            <div
              style={{
                position: "absolute",
                top: "32px",
                left: "-200px",
                background: "#fff",
                padding: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 1000,
                borderRadius: "8px",
                minWidth: "1000px",
              }}
            >
              <Resources />
            </div>
          )}
        </div>

        <a href="#" style={navLinkStyle}>Docs</a>
        <a href="#" style={navLinkStyle}>Pricing</a>

        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setPayroll(true)}
          onMouseLeave={() => setPayroll(false)}
        >
          <a style={navLinkStyle}>Payroll</a>
          {payroll && (
            <div
              style={{
                position: "absolute",
                top: "32px",
                left: "0px",
                background: "#fff",
                padding: "16px",
                zIndex: 1000,
                borderRadius: "8px",
                minWidth: "250px",
              }}
            >
              <PayrollMenu />
            </div>
          )}
        </div>

        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setAboutJaisvik(true)}
          onMouseLeave={() => setAboutJaisvik(false)}
        >
          <a style={navLinkStyle}>About us</a>
          {AboutJaisvik && (
            <div
              style={{
                position: "absolute",
                top: "32px",
                left: "0px",
                background: "#fff",
                padding: "16px",
                zIndex: 1000,
                borderRadius: "8px",
                minWidth: "250px",
              }}
            >
              {/* <AboutJaisvik /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

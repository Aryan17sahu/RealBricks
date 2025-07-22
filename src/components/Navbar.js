import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* Logo / Brand */}
      <div style={{ fontSize: "22px", fontWeight: "bold", color: "#007BFF" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#007BFF" }}>
          Real<span style={{ color: "green" }}>Bricks</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Home
        </Link>

        <Link
          to="/properties"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Properties
        </Link>

        <Link
          to="/agent-dashboard"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Agent Dashboard
        </Link>
      </div>

      {/* Login/Register Buttons */}
      <div>
        <button
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Login
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Overlay for better text visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Content */}
      <div style={{ zIndex: 2, maxWidth: "600px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>
          Find Your Dream Home with <span style={{ color: "#00ff99" }}>RealBricks</span>
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Browse thousands of properties, connect with agents, and book your dream home easily.
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#00bfff",
            color: "white",
            padding: "12px 25px",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🔍 Browse Properties
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

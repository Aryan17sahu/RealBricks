import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          height: "80vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "20px" }}>
          Find Your Dream Home Today
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "600px", marginBottom: "30px" }}>
          Browse through the best properties, rent or buy your dream flat or villa
          from trusted real estate agents.
        </p>
        <div>
          <Link
            to="/properties"
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              padding: "12px 25px",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "16px",
              marginRight: "10px",
            }}
          >
            View Properties
          </Link>
          <Link
            to="/agent-dashboard"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "12px 25px",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            List Your Property
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "30px", color: "#333" }}>
          Why Choose RealBricks?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#007BFF" }}>Verified Listings</h3>
            <p>All properties are verified by trusted agents.</p>
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#007BFF" }}>Easy Booking</h3>
            <p>Book your favorite property with just one click.</p>
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#007BFF" }}>Direct Contact</h3>
            <p>Talk directly with real estate agents for a better deal.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

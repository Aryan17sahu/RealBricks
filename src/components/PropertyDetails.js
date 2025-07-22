import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/properties/${id}`)
      .then((response) => setProperty(response.data))
      .catch((error) => console.error("Error fetching property details:", error));
  }, [id]);

  if (!property) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading property details...</p>;
  }

  return (
    <div style={containerStyle}>
      {/* ✅ Image Section */}
      <div style={imageContainer}>
        <img
          src={property.image_url || "https://via.placeholder.com/800x400"}
          alt={property.title}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      {/* ✅ Property Information */}
      <div style={detailsContainer}>
        <h2 style={{ marginBottom: "10px" }}>{property.title}</h2>
        <p style={{ color: "#555", fontSize: "16px", marginBottom: "5px" }}>
          📍 {property.location}
        </p>
        <p style={{ fontSize: "18px", fontWeight: "bold", color: "#007BFF" }}>
          ₹{property.price} | {property.bhk} BHK | {property.type}
        </p>

        <p style={{ marginTop: "15px", lineHeight: "1.6", color: "#333" }}>
          {property.description}
        </p>

        {/* ✅ Agent Contact & Booking Buttons */}
        <div style={buttonGroup}>
          <Link to={`/book/${property.id}`} style={bookButton}>
            ✅ Book Now
          </Link>
          <button
            style={contactButton}
            onClick={() =>
              alert("📞 Agent will contact you soon!")
            }
          >
            📞 Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Styles
const containerStyle = {
  maxWidth: "900px",
  margin: "30px auto",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  overflow: "hidden",
};

const imageContainer = {
  width: "100%",
  maxHeight: "350px",
  overflow: "hidden",
};

const detailsContainer = {
  padding: "20px",
};

const buttonGroup = {
  display: "flex",
  gap: "10px",
  marginTop: "20px",
};

const bookButton = {
  backgroundColor: "#007BFF",
  color: "white",
  padding: "10px 15px",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
};

const contactButton = {
  backgroundColor: "green",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default PropertyDetails;

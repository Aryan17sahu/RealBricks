import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookingPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/properties/${id}`)
      .then((response) => setProperty(response.data))
      .catch((error) => console.error("Error fetching property:", error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("⚠ Please fill all required fields!");
      return;
    }

    try {
      // ✅ Here you can send booking data to backend if you want to store it
      console.log("Booking Details:", { ...formData, propertyId: id });

      setBookingSuccess(true);
      setTimeout(() => navigate("/"), 2000); // ✅ Redirect after 2 seconds
    } catch (error) {
      console.error("Error booking property:", error);
    }
  };

  if (!property) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading property details...</p>;
  }

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🏠 Book This Property</h2>

      {/* ✅ Property Card */}
      <div style={propertyCardStyle}>
        <img
          src={property.image_url || "https://via.placeholder.com/400"}
          alt={property.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <p>
          <strong>₹{property.price}</strong> | {property.bhk} BHK | {property.type}
        </p>
      </div>

      {/* ✅ Booking Form */}
      <form onSubmit={handleBooking} style={formStyle}>
        <label style={labelStyle}>Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Phone *</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
          placeholder="Any special request or query..."
        />

        <button type="submit" style={buttonStyle}>✅ Confirm Booking</button>
      </form>

      {/* ✅ Success Message */}
      {bookingSuccess && (
        <p style={{ textAlign: "center", color: "green", marginTop: "10px" }}>
          🎉 Booking confirmed! Redirecting to home...
        </p>
      )}
    </div>
  );
};

// ✅ Styles
const containerStyle = {
  maxWidth: "500px",
  margin: "30px auto",
  padding: "20px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const propertyCardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "10px",
  backgroundColor: "#f9f9f9",
  marginBottom: "20px",
  textAlign: "center",
};

const formStyle = { display: "flex", flexDirection: "column" };

const labelStyle = { marginBottom: "5px", fontWeight: "bold" };

const inputStyle = {
  marginBottom: "15px",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  background: "#007BFF",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default BookingPage;

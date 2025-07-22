import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    bhk: "",
    location: "",
    type: "RENT",
    image_url: "",
  });

  const [previewImage, setPreviewImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/properties/${id}`);
      setProperty(response.data);
      setPreviewImage(response.data.image_url);
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
    if (e.target.name === "image_url") {
      setPreviewImage(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/properties/${id}`, property);
      alert("✅ Property updated successfully!");
      navigate("/agent-dashboard");
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>✏ Edit Property</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          name="title"
          value={property.title}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Description</label>
        <textarea
          name="description"
          value={property.description}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
          required
        />

        <label style={labelStyle}>Price (₹)</label>
        <input
          type="number"
          name="price"
          value={property.price}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>BHK</label>
        <select
          name="bhk"
          value={property.bhk}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4 BHK</option>
        </select>

        <label style={labelStyle}>Location</label>
        <input
          type="text"
          name="location"
          value={property.location}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Type</label>
        <select
          name="type"
          value={property.type}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="RENT">Rent</option>
          <option value="SALE">Sale</option>
        </select>

        <label style={labelStyle}>Image URL</label>
        <input
          type="text"
          name="image_url"
          value={property.image_url}
          onChange={handleChange}
          style={inputStyle}
        />

        {previewImage && (
          <div style={{ margin: "10px 0" }}>
            <img
              src={previewImage}
              alt="Preview"
              style={{
                width: "120px",
                height: "90px",
                objectFit: "cover",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
          </div>
        )}

        <button type="submit" style={buttonStyle}>
          ✅ Update Property
        </button>
      </form>
    </div>
  );
};

// ✅ Reuse same styles from AddProperty
const containerStyle = {
  maxWidth: "500px",
  margin: "30px auto",
  padding: "20px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
  background: "#007bff",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default EditProperty;

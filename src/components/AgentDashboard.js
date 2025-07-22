import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AgentDashboard = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/properties");
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`http://localhost:8080/api/properties/${id}`);
        setProperties(properties.filter((p) => p.id !== id));
      } catch (error) {
        console.error("Error deleting property:", error);
      }
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🏢 Agent Dashboard (Manage Properties)
      </h2>
      <button
        onClick={() => navigate("/add-property")}
        style={{
          background: "#28a745",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ➕ Add New Property
      </button>

      <div
        style={{
          overflowX: "auto",
          background: "#fff",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8f9fa" }}>
              <th style={thStyle}>Image</th>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>BHK</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tdStyle}>
                  <img
                    src={
                      property.image_url || "https://via.placeholder.com/80"
                    }
                    alt={property.title}
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td style={tdStyle}>{property.title}</td>
                <td style={tdStyle}>₹{property.price}</td>
                <td style={tdStyle}>{property.bhk} BHK</td>
                <td style={tdStyle}>{property.location}</td>
                <td style={tdStyle}>{property.type}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => navigate(`/edit-property/${property.id}`)}
                    style={{
                      background: "#007bff",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "3px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                  >
                    ✏ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(property.id)}
                    style={{
                      background: "#dc3545",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ✅ Table Styles
const thStyle = {
  textAlign: "left",
  padding: "10px",
  fontWeight: "bold",
  borderBottom: "2px solid #ddd",
};

const tdStyle = {
  padding: "10px",
  verticalAlign: "middle",
};

export default AgentDashboard;

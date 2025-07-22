import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  useEffect(() => {
    axios.get("http://localhost:8080/api/properties")
      .then((response) => setProperties(response.data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  // ✅ Search Filter
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase()) ||
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Sorting Logic
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "newest") return b.id - a.id; // Assuming higher ID = newer property
    return 0;
  });

  // ✅ Pagination Logic
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = sortedProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Available Properties</h2>

      {/* ✅ Search & Sort */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by location or title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "60%", border: "1px solid #ccc", borderRadius: "4px" }}
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
        >
          <option value="default">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      {/* ✅ Property Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {currentProperties.length > 0 ? (
          currentProperties.map((property) => (
            <div
              key={property.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={property.image_url || "https://via.placeholder.com/300"}
                alt={property.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p><strong>₹{property.price}</strong></p>
              <p>{property.bhk} BHK | {property.type}</p>
              <Link
                to={`/property/${property.id}`}
                style={{
                  display: "inline-block",
                  marginTop: "5px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  padding: "5px 10px",
                  textDecoration: "none",
                  borderRadius: "5px",
                }}
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>No properties found.</p>
        )}
      </div>

      {/* ✅ Pagination Controls */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              padding: "8px 12px",
              margin: "0 5px",
              border: "1px solid #ccc",
              backgroundColor: currentPage === i + 1 ? "#007BFF" : "#fff",
              color: currentPage === i + 1 ? "#fff" : "#333",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

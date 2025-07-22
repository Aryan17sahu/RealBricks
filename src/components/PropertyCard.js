import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        width: "300px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{property.title}</h3>
      <p>
        <strong>Location:</strong> {property.location}
      </p>
      <p>
        <strong>Price:</strong> ₹{property.price}
      </p>
      <p>
        <strong>BHK:</strong> {property.bhk}
      </p>
      <img
        src={property.image_url}
        alt="property"
        style={{ width: "100%", height: "auto", marginTop: "10px" }}
      />
    </div>
  );
};

export default PropertyCard;

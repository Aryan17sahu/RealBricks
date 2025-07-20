import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "RENT",
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/properties", property);
      alert("Property added successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <div className="card p-3">
      <h3>Add New Property</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control"
            value={property.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="form-control"
            value={property.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="form-control"
            value={property.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="form-control"
            value={property.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <select
            name="type"
            className="form-control"
            value={property.type}
            onChange={handleChange}
          >
            <option value="RENT">Rent</option>
            <option value="SALE">Sale</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;

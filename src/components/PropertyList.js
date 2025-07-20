import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

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

  return (
    <div className="mt-3">
      <h3>Available Properties</h3>
      <table className="table table-bordered table-striped mt-2">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Location</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.id}>
              <td>{prop.id}</td>
              <td>{prop.title}</td>
              <td>{prop.description}</td>
              <td>{prop.price}</td>
              <td>{prop.location}</td>
              <td>{prop.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);
  const [editedData, setEditedData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "RENT",
  });

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

  const deleteProperty = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`http://localhost:8080/api/properties/${id}`);
        alert("Property deleted!");
        fetchProperties();
      } catch (error) {
        console.error("Error deleting property:", error);
      }
    }
  };

  const startEditing = (property) => {
    setEditingProperty(property.id);
    setEditedData({ ...property });
  };

  const handleEditChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/properties/${editingProperty}`,
        editedData
      );
      alert("Property updated!");
      setEditingProperty(null);
      fetchProperties();
    } catch (error) {
      console.error("Error updating property:", error);
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.id}>
              <td>{prop.id}</td>
              <td>
                {editingProperty === prop.id ? (
                  <input
                    type="text"
                    name="title"
                    value={editedData.title}
                    onChange={handleEditChange}
                  />
                ) : (
                  prop.title
                )}
              </td>
              <td>
                {editingProperty === prop.id ? (
                  <input
                    type="text"
                    name="description"
                    value={editedData.description}
                    onChange={handleEditChange}
                  />
                ) : (
                  prop.description
                )}
              </td>
              <td>
                {editingProperty === prop.id ? (
                  <input
                    type="number"
                    name="price"
                    value={editedData.price}
                    onChange={handleEditChange}
                  />
                ) : (
                  prop.price
                )}
              </td>
              <td>
                {editingProperty === prop.id ? (
                  <input
                    type="text"
                    name="location"
                    value={editedData.location}
                    onChange={handleEditChange}
                  />
                ) : (
                  prop.location
                )}
              </td>
              <td>
                {editingProperty === prop.id ? (
                  <select
                    name="type"
                    value={editedData.type}
                    onChange={handleEditChange}
                  >
                    <option value="RENT">Rent</option>
                    <option value="SALE">Sale</option>
                  </select>
                ) : (
                  prop.type
                )}
              </td>
              <td>
                {editingProperty === prop.id ? (
                  <>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={saveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setEditingProperty(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => startEditing(prop)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteProperty(prop.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyList;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropertyList from "./components/PropertyList";
import AddProperty from "./components/AddProperty";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🏠 RealBricks - Property Listings</h1>
      <AddProperty />
      <hr />
      <PropertyList />
    </div>
  );
}

export default App;

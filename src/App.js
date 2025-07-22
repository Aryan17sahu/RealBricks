import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PropertyList from "./components/PropertyList";
import PropertyDetails from "./components/PropertyDetails";
import BookingPage from "./components/BookingPage";
import AgentDashboard from "./components/AgentDashboard";
import AddProperty from "./components/AddProperty";
import EditProperty from "./components/EditProperty";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Landing Page */}
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/agent-dashboard" element={<AgentDashboard />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/edit-property/:id" element={<EditProperty />} />
      </Routes>
    </Router>
  );
}

export default App;

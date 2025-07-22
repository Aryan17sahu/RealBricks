import React, { useState } from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bhk, setBhk] = useState("");

  const handleSearch = () => {
    onSearch({ location, type, bhk });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        backgroundColor: "#f8f9fa",
        p: 2,
        borderRadius: "8px",
        maxWidth: "900px",
        mx: "auto",
        mt: 3,
      }}
    >
      <TextField
        label="Location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        select
        label="Property Type"
        variant="outlined"
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="FLAT">Flat</MenuItem>
        <MenuItem value="VILLA">Villa</MenuItem>
      </TextField>
      <TextField
        select
        label="BHK"
        variant="outlined"
        value={bhk}
        onChange={(e) => setBhk(e.target.value)}
        sx={{ minWidth: 100 }}
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="1">1 BHK</MenuItem>
        <MenuItem value="2">2 BHK</MenuItem>
        <MenuItem value="3">3 BHK</MenuItem>
        <MenuItem value="4">4 BHK</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}

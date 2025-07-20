package com.app.realbricks.controller;


import com.app.realbricks.model.Property;
import com.app.realbricks.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:3000") // React frontend
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @GetMapping("/{id}")
    public Property getProperty(@PathVariable Long id) {
        return propertyRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Property addProperty(@RequestBody Property property) {
        return propertyRepository.save(property);
    }

    @PutMapping("/{id}")
    public Property updateProperty(@PathVariable Long id, @RequestBody Property propertyDetails) {
        Property existingProperty = propertyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Property not found with id " + id));

        existingProperty.setTitle(propertyDetails.getTitle());
        existingProperty.setDescription(propertyDetails.getDescription());
        existingProperty.setPrice(propertyDetails.getPrice());
        existingProperty.setLocation(propertyDetails.getLocation());
        existingProperty.setType(propertyDetails.getType());

        return propertyRepository.save(existingProperty);
    }


    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable Long id) {
        propertyRepository.deleteById(id);
    }
}
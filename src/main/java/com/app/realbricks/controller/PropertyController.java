package com.app.realbricks.controller;


import com.app.realbricks.model.Property;
import com.app.realbricks.service.PropertyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:3000")
public class PropertyController {

    private final PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping
    public List<Property> searchProperties(
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) Integer bhk) {
        return propertyService.searchProperties(location, type, bhk);
    }

    @GetMapping("/{id}")
    public Property getProperty(@PathVariable Long id) {
        return propertyService.getPropertyById(id);
    }
    @GetMapping("/api/properties")
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }


    @PostMapping
    public Property addProperty(@RequestBody Property property) {
        return propertyService.addProperty(property);
    }

    @PutMapping("/{id}")
    public Property updateProperty(@PathVariable Long id, @RequestBody Property property) {
        return propertyService.updateProperty(id, property);
    }

    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable Long id) {
        propertyService.deleteProperty(id);
    }
}
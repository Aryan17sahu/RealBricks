package com.app.realbricks.service;


import com.app.realbricks.model.Property;
import com.app.realbricks.repository.PropertyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;

    public PropertyServiceImpl(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @Override
    public Property getPropertyById(Long id) {
        return propertyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Property not found with id: " + id));
    }

    @Override
    public Property addProperty(Property property) {
        return propertyRepository.save(property);
    }

    @Override
    public Property updateProperty(Long id, Property property) {
        Property existingProperty = getPropertyById(id);
        existingProperty.setTitle(property.getTitle());
        existingProperty.setLocation(property.getLocation());
        existingProperty.setPrice(property.getPrice());
        existingProperty.setType(property.getType());
        existingProperty.setBhk(property.getBhk());
        existingProperty.setDescription(property.getDescription());
        existingProperty.setImage_url(property.getImage_url());
        return propertyRepository.save(existingProperty);
    }

    @Override
    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }

    @Override
    public List<Property> searchProperties(String location, String type, Integer bhk) {
        if (location == null && type == null && bhk == null) {
            return propertyRepository.findAll();
        }
        return propertyRepository.findByFilters(
                location == null ? "" : location,
                type == null ? "" : type,
                bhk == null ? 0 : bhk
        );
    }
}
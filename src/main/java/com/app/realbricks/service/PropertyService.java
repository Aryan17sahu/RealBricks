package com.app.realbricks.service;

import com.app.realbricks.model.Property;

import java.util.List;

public interface PropertyService {


        List<Property> getAllProperties();
        Property getPropertyById(Long id);
        Property addProperty(Property property);
        Property updateProperty(Long id, Property property);
        void deleteProperty(Long id);
        List<Property> searchProperties(String location, String type, Integer bhk);

}

package com.app.realbricks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.realbricks.model.Property;
import java.util.List;

public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findByLocationContainingIgnoreCase(String location);
}
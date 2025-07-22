package com.app.realbricks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.realbricks.model.Property;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface PropertyRepository extends JpaRepository<Property, Long> {

    @Query("SELECT p FROM Property p WHERE " +
            "(:location = '' OR LOWER(p.location) LIKE LOWER(CONCAT('%',:location,'%'))) AND " +
            "(:type = '' OR p.type = :type) AND " +
            "(:bhk = 0 OR p.bhk = :bhk)")
    List<Property> findByFilters(@Param("location") String location,
                                 @Param("type") String type,
                                 @Param("bhk") int bhk);
}
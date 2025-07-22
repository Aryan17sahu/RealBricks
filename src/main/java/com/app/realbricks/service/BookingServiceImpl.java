package com.app.realbricks.service;

import com.app.realbricks.model.Booking;
import com.app.realbricks.model.Property;
import com.app.realbricks.repository.BookingRepository;
import com.app.realbricks.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @Override
    public Booking createBooking(Booking booking, Long propertyId) {
        Property property = propertyRepository.findById(propertyId)
                .orElseThrow(() -> new RuntimeException("Property not found"));
        booking.setProperty(property);
        booking.setAgent(property.getOwner());
        return bookingRepository.save(booking);
    }
}
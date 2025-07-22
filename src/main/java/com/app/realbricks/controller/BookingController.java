package com.app.realbricks.controller;


import com.app.realbricks.model.Booking;
import com.app.realbricks.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/{propertyId}")
    public Booking createBooking(@RequestBody Booking booking, @PathVariable Long propertyId) {
        return bookingService.createBooking(booking, propertyId);
    }
}
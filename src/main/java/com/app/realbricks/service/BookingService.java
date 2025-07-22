package com.app.realbricks.service;

import com.app.realbricks.model.Booking;

public interface BookingService {
    Booking createBooking(Booking booking, Long propertyId);
}
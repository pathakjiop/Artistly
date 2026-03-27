package com.artistly.backend.controller;

import com.artistly.backend.dto.BookingDTO;
import com.artistly.backend.dto.BookingRequest;
import com.artistly.backend.service.BookingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
@Tag(name = "Bookings", description = "Booking management APIs")
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    @Operation(summary = "Create a booking request", description = "Submit a quote/booking request for an artist")
    public ResponseEntity<BookingDTO> createBooking(@Valid @RequestBody BookingRequest request) {
        BookingDTO created = bookingService.createBooking(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping("/artist/{artistId}")
    @Operation(summary = "Get bookings for an artist")
    public ResponseEntity<List<BookingDTO>> getBookingsByArtist(@PathVariable Long artistId) {
        return ResponseEntity.ok(bookingService.getBookingsByArtist(artistId));
    }

    @PatchMapping("/{id}/status")
    @Operation(summary = "Update booking status", description = "Confirm, cancel, or complete a booking")
    public ResponseEntity<BookingDTO> updateBookingStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        String status = body.get("status");
        if (status == null) {
            throw new IllegalArgumentException("Status field is required");
        }
        return ResponseEntity.ok(bookingService.updateBookingStatus(id, status));
    }
}

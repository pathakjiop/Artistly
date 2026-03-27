package com.artistly.backend.service;

import com.artistly.backend.dto.BookingDTO;
import com.artistly.backend.dto.BookingRequest;
import com.artistly.backend.exception.ResourceNotFoundException;
import com.artistly.backend.model.Artist;
import com.artistly.backend.model.Booking;
import com.artistly.backend.model.enums.BookingStatus;
import com.artistly.backend.repository.ArtistRepository;
import com.artistly.backend.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final ArtistRepository artistRepository;

    @Transactional
    public BookingDTO createBooking(BookingRequest request) {
        Artist artist = artistRepository.findById(request.getArtistId())
                .orElseThrow(() -> new ResourceNotFoundException("Artist not found with id: " + request.getArtistId()));

        Booking booking = Booking.builder()
                .artist(artist)
                .clientName(request.getClientName())
                .clientEmail(request.getClientEmail())
                .clientPhone(request.getClientPhone())
                .eventDate(request.getEventDate())
                .eventType(request.getEventType())
                .eventLocation(request.getEventLocation())
                .message(request.getMessage())
                .status(BookingStatus.PENDING)
                .build();

        Booking saved = bookingRepository.save(booking);
        return toDTO(saved);
    }

    public List<BookingDTO> getBookingsByArtist(Long artistId) {
        if (!artistRepository.existsById(artistId)) {
            throw new ResourceNotFoundException("Artist not found with id: " + artistId);
        }
        return bookingRepository.findByArtistId(artistId).stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public BookingDTO updateBookingStatus(Long id, String status) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found with id: " + id));

        try {
            booking.setStatus(BookingStatus.valueOf(status.toUpperCase()));
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid status: " + status +
                    ". Valid values are: PENDING, CONFIRMED, CANCELLED, COMPLETED");
        }

        Booking saved = bookingRepository.save(booking);
        return toDTO(saved);
    }

    private BookingDTO toDTO(Booking booking) {
        return BookingDTO.builder()
                .id(booking.getId())
                .artistId(booking.getArtist().getId())
                .artistName(booking.getArtist().getName())
                .clientName(booking.getClientName())
                .clientEmail(booking.getClientEmail())
                .clientPhone(booking.getClientPhone())
                .eventDate(booking.getEventDate())
                .eventType(booking.getEventType())
                .eventLocation(booking.getEventLocation())
                .message(booking.getMessage())
                .status(booking.getStatus() != null ? booking.getStatus().name() : null)
                .createdAt(booking.getCreatedAt() != null ? booking.getCreatedAt().toString() : null)
                .build();
    }
}

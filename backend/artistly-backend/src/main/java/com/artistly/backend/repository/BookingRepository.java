package com.artistly.backend.repository;

import com.artistly.backend.model.Booking;
import com.artistly.backend.model.enums.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByArtistId(Long artistId);

    List<Booking> findByStatus(BookingStatus status);

    List<Booking> findByClientEmail(String clientEmail);

    long countByStatus(BookingStatus status);
}

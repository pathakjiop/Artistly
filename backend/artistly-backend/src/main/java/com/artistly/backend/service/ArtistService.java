package com.artistly.backend.service;

import com.artistly.backend.dto.*;
import com.artistly.backend.exception.ResourceNotFoundException;
import com.artistly.backend.model.Artist;
import com.artistly.backend.model.enums.ArtistStatus;
import com.artistly.backend.repository.ArtistRepository;
import com.artistly.backend.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ArtistService {

    private final ArtistRepository artistRepository;
    private final BookingRepository bookingRepository;

    public List<ArtistDTO> getAllArtists(String category, String location, String search) {
        List<Artist> artists;

        if (category != null || location != null || search != null) {
            artists = artistRepository.searchArtists(category, location, search);
        } else {
            artists = artistRepository.findAll();
        }

        return artists.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public List<ArtistDTO> getApprovedArtists(String category, String location, String search) {
        List<ArtistDTO> all = getAllArtists(category, location, search);
        return all.stream()
                .filter(a -> "APPROVED".equals(a.getStatus()))
                .collect(Collectors.toList());
    }

    public ArtistDTO getArtistById(Long id) {
        Artist artist = artistRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Artist not found with id: " + id));
        return toDTO(artist);
    }

    @Transactional
    public ArtistDTO createArtist(ArtistCreateRequest request) {
        if (artistRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("An artist with this email already exists");
        }

        Artist artist = Artist.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .bio(request.getBio())
                .category(request.getCategories() != null && !request.getCategories().isEmpty()
                        ? request.getCategories().get(0) : "")
                .specialties(request.getCategories())
                .languages(request.getLanguages())
                .priceRange(request.getFeeRange())
                .location(request.getLocation())
                .experience(request.getExperience())
                .website(request.getWebsite())
                .socialMedia(request.getSocialMedia())
                .imageUrl(request.getImageUrl())
                .status(ArtistStatus.PENDING)
                .verified(false)
                .rating(0.0)
                .reviews(0)
                .responseTime("24 hours")
                .build();

        Artist saved = artistRepository.save(artist);
        return toDTO(saved);
    }

    @Transactional
    public ArtistDTO updateArtist(Long id, ArtistUpdateRequest request) {
        Artist artist = artistRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Artist not found with id: " + id));

        if (request.getName() != null) artist.setName(request.getName());
        if (request.getPhone() != null) artist.setPhone(request.getPhone());
        if (request.getCategory() != null) artist.setCategory(request.getCategory());
        if (request.getLocation() != null) artist.setLocation(request.getLocation());
        if (request.getPriceRange() != null) artist.setPriceRange(request.getPriceRange());
        if (request.getImageUrl() != null) artist.setImageUrl(request.getImageUrl());
        if (request.getBio() != null) artist.setBio(request.getBio());
        if (request.getSpecialties() != null) artist.setSpecialties(request.getSpecialties());
        if (request.getVerified() != null) artist.setVerified(request.getVerified());
        if (request.getResponseTime() != null) artist.setResponseTime(request.getResponseTime());
        if (request.getLanguages() != null) artist.setLanguages(request.getLanguages());
        if (request.getExperience() != null) artist.setExperience(request.getExperience());
        if (request.getWebsite() != null) artist.setWebsite(request.getWebsite());
        if (request.getSocialMedia() != null) artist.setSocialMedia(request.getSocialMedia());

        Artist saved = artistRepository.save(artist);
        return toDTO(saved);
    }

    @Transactional
    public ArtistDTO updateArtistStatus(Long id, String status) {
        Artist artist = artistRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Artist not found with id: " + id));

        try {
            artist.setStatus(ArtistStatus.valueOf(status.toUpperCase()));
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid status: " + status +
                    ". Valid values are: PENDING, APPROVED, REJECTED");
        }

        Artist saved = artistRepository.save(artist);
        return toDTO(saved);
    }

    @Transactional
    public void deleteArtist(Long id) {
        if (!artistRepository.existsById(id)) {
            throw new ResourceNotFoundException("Artist not found with id: " + id);
        }
        artistRepository.deleteById(id);
    }

    public DashboardStatsDTO getDashboardStats() {
        long totalArtists = artistRepository.count();
        long approvedArtists = artistRepository.countByStatus(ArtistStatus.APPROVED);
        long pendingReviews = artistRepository.countByStatus(ArtistStatus.PENDING);
        long totalBookings = bookingRepository.count();
        long activeBookings = bookingRepository.countByStatus(
                com.artistly.backend.model.enums.BookingStatus.CONFIRMED);

        return DashboardStatsDTO.builder()
                .totalArtists(totalArtists)
                .approvedArtists(approvedArtists)
                .pendingReviews(pendingReviews)
                .totalBookings(totalBookings)
                .activeBookings(activeBookings)
                .totalRevenue("₹12,45,000")
                .build();
    }

    private ArtistDTO toDTO(Artist artist) {
        return ArtistDTO.builder()
                .id(artist.getId())
                .name(artist.getName())
                .email(artist.getEmail())
                .phone(artist.getPhone())
                .category(artist.getCategory())
                .location(artist.getLocation())
                .rating(artist.getRating())
                .reviews(artist.getReviews())
                .priceRange(artist.getPriceRange())
                .imageUrl(artist.getImageUrl())
                .bio(artist.getBio())
                .specialties(artist.getSpecialties())
                .verified(artist.getVerified())
                .responseTime(artist.getResponseTime())
                .languages(artist.getLanguages())
                .experience(artist.getExperience())
                .website(artist.getWebsite())
                .socialMedia(artist.getSocialMedia())
                .status(artist.getStatus() != null ? artist.getStatus().name() : null)
                .createdAt(artist.getCreatedAt() != null ? artist.getCreatedAt().toString() : null)
                .updatedAt(artist.getUpdatedAt() != null ? artist.getUpdatedAt().toString() : null)
                .build();
    }
}

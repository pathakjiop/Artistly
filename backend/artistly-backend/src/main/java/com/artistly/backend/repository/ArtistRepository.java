package com.artistly.backend.repository;

import com.artistly.backend.model.Artist;
import com.artistly.backend.model.enums.ArtistStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {

    List<Artist> findByCategory(String category);

    List<Artist> findByLocationContainingIgnoreCase(String location);

    List<Artist> findByStatus(ArtistStatus status);

    List<Artist> findByVerifiedTrue();

    Optional<Artist> findByEmail(String email);

    boolean existsByEmail(String email);

    @Query("SELECT a FROM Artist a WHERE " +
           "(:category IS NULL OR LOWER(a.category) = LOWER(:category)) AND " +
           "(:location IS NULL OR LOWER(a.location) LIKE LOWER(CONCAT('%', :location, '%'))) AND " +
           "(:search IS NULL OR LOWER(a.name) LIKE LOWER(CONCAT('%', :search, '%')) " +
           "OR LOWER(a.category) LIKE LOWER(CONCAT('%', :search, '%')))")
    List<Artist> searchArtists(
            @Param("category") String category,
            @Param("location") String location,
            @Param("search") String search
    );

    long countByStatus(ArtistStatus status);
}

package com.artistly.backend.model;

import com.artistly.backend.model.enums.ArtistStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "artists")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    private String phone;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String location;

    @Builder.Default
    private Double rating = 0.0;

    @Builder.Default
    private Integer reviews = 0;

    private String priceRange;

    private String imageUrl;

    @Column(length = 2000)
    private String bio;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "artist_specialties", joinColumns = @JoinColumn(name = "artist_id"))
    @Column(name = "specialty")
    @Builder.Default
    private List<String> specialties = new ArrayList<>();

    @Builder.Default
    private Boolean verified = false;

    private String responseTime;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "artist_languages", joinColumns = @JoinColumn(name = "artist_id"))
    @Column(name = "language")
    @Builder.Default
    private List<String> languages = new ArrayList<>();

    private String experience;

    private String website;

    private String socialMedia;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private ArtistStatus status = ArtistStatus.PENDING;

    @Column(updatable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}

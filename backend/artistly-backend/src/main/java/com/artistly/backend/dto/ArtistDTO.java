package com.artistly.backend.dto;

import lombok.*;

import java.util.List;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ArtistDTO {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String category;
    private String location;
    private Double rating;
    private Integer reviews;
    private String priceRange;
    private String imageUrl;
    private String bio;
    private List<String> specialties;
    private Boolean verified;
    private String responseTime;
    private List<String> languages;
    private String experience;
    private String website;
    private String socialMedia;
    private String status;
    private String createdAt;
    private String updatedAt;
}

package com.artistly.backend.dto;

import lombok.*;

import java.util.List;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ArtistUpdateRequest {
    private String name;
    private String phone;
    private String category;
    private String location;
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
}

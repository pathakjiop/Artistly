package com.artistly.backend.dto;

import jakarta.validation.constraints.*;
import lombok.*;

import java.util.List;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ArtistCreateRequest {

    @NotBlank(message = "Name is required")
    @Size(min = 2, message = "Name must be at least 2 characters")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Please enter a valid email")
    private String email;

    @NotBlank(message = "Phone number is required")
    @Size(min = 10, message = "Please enter a valid phone number")
    private String phone;

    @NotBlank(message = "Bio is required")
    @Size(min = 50, message = "Bio must be at least 50 characters")
    private String bio;

    @NotEmpty(message = "Please select at least one category")
    private List<String> categories;

    @NotEmpty(message = "Please select at least one language")
    private List<String> languages;

    @NotBlank(message = "Please select a fee range")
    private String feeRange;

    @NotBlank(message = "Location is required")
    @Size(min = 2, message = "Please enter your location")
    private String location;

    @NotBlank(message = "Please select your experience level")
    private String experience;

    private String website;
    private String socialMedia;
    private String imageUrl;
}

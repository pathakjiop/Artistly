package com.artistly.backend.dto;

import jakarta.validation.constraints.*;
import lombok.*;

import java.time.LocalDate;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class BookingRequest {

    @NotNull(message = "Artist ID is required")
    private Long artistId;

    @NotBlank(message = "Client name is required")
    private String clientName;

    @NotBlank(message = "Client email is required")
    @Email(message = "Please enter a valid email")
    private String clientEmail;

    private String clientPhone;

    @NotNull(message = "Event date is required")
    private LocalDate eventDate;

    private String eventType;
    private String eventLocation;
    private String message;
}

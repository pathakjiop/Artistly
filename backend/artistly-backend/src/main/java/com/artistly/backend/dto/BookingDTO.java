package com.artistly.backend.dto;

import lombok.*;

import java.time.LocalDate;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class BookingDTO {
    private Long id;
    private Long artistId;
    private String artistName;
    private String clientName;
    private String clientEmail;
    private String clientPhone;
    private LocalDate eventDate;
    private String eventType;
    private String eventLocation;
    private String message;
    private String status;
    private String createdAt;
}

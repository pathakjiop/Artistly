package com.artistly.backend.dto;

import lombok.*;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class DashboardStatsDTO {
    private long totalArtists;
    private long approvedArtists;
    private long pendingReviews;
    private long totalBookings;
    private long activeBookings;
    private String totalRevenue;
}

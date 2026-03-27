package com.artistly.backend.controller;

import com.artistly.backend.dto.*;
import com.artistly.backend.service.ArtistService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/artists")
@RequiredArgsConstructor
@Tag(name = "Artists", description = "Artist management APIs")
public class ArtistController {

    private final ArtistService artistService;

    @GetMapping
    @Operation(summary = "List all artists", description = "Retrieve artists with optional filters for category, location, and search")
    public ResponseEntity<List<ArtistDTO>> getAllArtists(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(artistService.getApprovedArtists(category, location, search));
    }

    @GetMapping("/all")
    @Operation(summary = "List all artists (including pending/rejected)", description = "Manager endpoint to see all submissions")
    public ResponseEntity<List<ArtistDTO>> getAllArtistsAdmin(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(artistService.getAllArtists(category, location, search));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get artist by ID")
    public ResponseEntity<ArtistDTO> getArtistById(@PathVariable Long id) {
        return ResponseEntity.ok(artistService.getArtistById(id));
    }

    @PostMapping
    @Operation(summary = "Onboard new artist", description = "Submit an artist onboarding application")
    public ResponseEntity<ArtistDTO> createArtist(@Valid @RequestBody ArtistCreateRequest request) {
        ArtistDTO created = artistService.createArtist(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update artist details")
    public ResponseEntity<ArtistDTO> updateArtist(
            @PathVariable Long id,
            @RequestBody ArtistUpdateRequest request) {
        return ResponseEntity.ok(artistService.updateArtist(id, request));
    }

    @PatchMapping("/{id}/status")
    @Operation(summary = "Update artist status", description = "Approve or reject an artist application")
    public ResponseEntity<ArtistDTO> updateArtistStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        String status = body.get("status");
        if (status == null) {
            throw new IllegalArgumentException("Status field is required");
        }
        return ResponseEntity.ok(artistService.updateArtistStatus(id, status));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete an artist")
    public ResponseEntity<Void> deleteArtist(@PathVariable Long id) {
        artistService.deleteArtist(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/dashboard/stats")
    @Operation(summary = "Get dashboard statistics")
    public ResponseEntity<DashboardStatsDTO> getDashboardStats() {
        return ResponseEntity.ok(artistService.getDashboardStats());
    }
}

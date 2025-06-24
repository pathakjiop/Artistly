"use client"

import { useState, useMemo } from "react"
import { ArtistCard } from "./artist-card"
import { ArtistFilters } from "./artist-filters"
import { mockArtists } from "@/lib/mock-data"
import type { FilterState } from "@/lib/types"

export function ArtistListing() {
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    location: "",
    priceRange: "",
    search: "",
  })

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter artists based on current filters
  const filteredArtists = useMemo(() => {
    return mockArtists.filter((artist) => {
      const matchesCategory = !filters.category || artist.category.toLowerCase() === filters.category.toLowerCase()
      const matchesLocation =
        !filters.location || artist.location.toLowerCase().includes(filters.location.toLowerCase())
      const matchesPriceRange = !filters.priceRange || artist.priceRange === filters.priceRange
      const matchesSearch =
        !filters.search ||
        artist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        artist.category.toLowerCase().includes(filters.search.toLowerCase()) ||
        artist.specialties.some((s) => s.toLowerCase().includes(filters.search.toLowerCase()))

      return matchesCategory && matchesLocation && matchesPriceRange && matchesSearch
    })
  }, [filters])

  return (
    <div className="space-y-6">
      <ArtistFilters
        filters={filters}
        onFiltersChange={setFilters}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        resultCount={filteredArtists.length}
      />

      {filteredArtists.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No artists found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  )
}

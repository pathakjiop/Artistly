"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Grid, List, Filter } from "lucide-react"
import type { FilterState } from "@/lib/types"

interface ArtistFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
  resultCount: number
}

const categories = [
  { value: "all", label: "All Categories" },
  { value: "singer", label: "Singer" },
  { value: "dancer", label: "Dancer" },
  { value: "dj", label: "DJ" },
  { value: "speaker", label: "Speaker" },
  { value: "band", label: "Band" },
  { value: "comedian", label: "Comedian" },
  { value: "magician", label: "Magician" },
  { value: "folk", label: "Folk Artist" },
  { value: "classical", label: "Classical Artist" },
  { value: "bollywood", label: "Bollywood Performer" },
]

const priceRanges = [
  { value: "all", label: "All Price Ranges" },
  { value: "0-10000", label: "₹0 - ₹10,000" },
  { value: "10000-50000", label: "₹10,000 - ₹50,000" },
  { value: "50000-100000", label: "₹50,000 - ₹1,00,000" },
  { value: "100000+", label: "₹1,00,000+" },
]

export function ArtistFilters({
  filters,
  onFiltersChange,
  viewMode,
  onViewModeChange,
  resultCount,
}: ArtistFiltersProps) {
  const updateFilter = (key: keyof FilterState, value: string) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const clearFilters = () => {
    onFiltersChange({
      category: "",
      location: "",
      priceRange: "",
      search: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some((value) => value !== "")

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search artists, categories, or specialties..."
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Category Filter */}
          <Select
            value={filters.category === "" ? "all" : filters.category}
            onValueChange={(value) => updateFilter("category", value === "all" ? "" : value)}
          >
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Location Filter */}
          <Input
            placeholder="Location"
            value={filters.location}
            onChange={(e) => updateFilter("location", e.target.value)}
            className="w-full sm:w-48"
          />

          {/* Price Range Filter */}
          <Select
            value={filters.priceRange === "" ? "all" : filters.priceRange}
            onValueChange={(value) => updateFilter("priceRange", value === "all" ? "" : value)}
          >
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters}>
              <Filter className="h-4 w-4 mr-2" />
              Clear
            </Button>
          )}
        </div>

        {/* View Mode & Results */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {resultCount} {resultCount === 1 ? "artist" : "artists"}
          </span>

          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

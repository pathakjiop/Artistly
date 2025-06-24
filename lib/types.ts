export interface Artist {
  id: number
  name: string
  category: string
  location: string
  rating: number
  reviews: number
  priceRange: string
  image: string
  bio: string
  specialties: string[]
  verified: boolean
  responseTime: string
  languages: string[]
  experience: string
}

export interface FilterState {
  category: string
  location: string
  priceRange: string
  search: string
}

export interface ArtistSubmission {
  id: number
  name: string
  email: string
  category: string
  location: string
  feeRange: string
  status: "pending" | "approved" | "rejected"
  rating: number
  image: string
  submittedAt: string
}

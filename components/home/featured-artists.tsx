import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"

const featuredArtists = [
  {
    id: 1,
    name: "Aarav Sharma",
    category: "Singer",
    location: "Mumbai, Maharashtra",
    rating: 4.9,
    reviews: 45,
    priceRange: "₹40,000-80,000",
    image: "/img/Singer.jpg",
    specialties: ["Bollywood", "Classical", "Pop"],
  },
  {
    id: 2,
    name: "Priya Nair",
    category: "Dancers",
    location: "Bengaluru, Karnataka",
    rating: 4.8,
    reviews: 32,
    priceRange: "₹60,000-1,20,000",
    image: "/img/Dancer.jpg",
    specialties: ["Bharatanatyam", "Contemporary", "Folk"],
  },
  {
    id: 3,
    name: "Rahul Verma",
    category: "DJ",
    location: "Delhi",
    rating: 4.9,
    reviews: 67,
    priceRange: "₹30,000-60,000",
    image: "/img/DJ.jpg",
    specialties: ["Electronic", "House", "Wedding", "Top 40"],
  },
]

export function FeaturedArtists() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artists</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our top-rated performers who consistently deliver exceptional experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredArtists.map((artist) => (
          <Card key={artist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square relative">
              <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90">
                  Featured
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
                  <p className="text-primary font-medium">{artist.category}</p>
                </div>

                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{artist.location}</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{artist.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({artist.reviews})</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">{artist.priceRange}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {artist.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full">Ask for Quote</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

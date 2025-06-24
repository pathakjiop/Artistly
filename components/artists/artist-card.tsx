import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Heart } from "lucide-react"
import type { Artist } from "@/lib/types"

interface ArtistCardProps {
  artist: Artist
  viewMode: "grid" | "list"
}

export function ArtistCard({ artist, viewMode }: ArtistCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image for list view */}
            <div className="w-full md:w-48 h-48 flex-shrink-0">
              <img
                src={artist.image || "/placeholder.svg"}
                alt={artist.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Content for list view */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
                    {artist.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-primary font-medium">{artist.category}</p>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{artist.location}</span>
                  </div>
                </div>

                <div className="text-right space-y-2">
                  <div className="text-lg font-semibold text-green-600">{artist.priceRange}</div>
                  <div className="flex items-center justify-end">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{artist.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({artist.reviews})</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm line-clamp-2">{artist.bio}</p>

              <div className="flex flex-wrap gap-2">
                {artist.specialties.slice(0, 4).map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {artist.specialties.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{artist.specialties.length - 4} more
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Responds in {artist.responseTime}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm">Ask for Quote</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-square relative">
        <img
          src={artist.image || "/placeholder.svg"}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {artist.verified && (
            <Badge variant="secondary" className="bg-white/90">
              Verified
            </Badge>
          )}
          <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{artist.name}</h3>
            <p className="text-primary font-medium">{artist.category}</p>
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{artist.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              <span className="text-sm font-medium">{artist.rating}</span>
              <span className="text-sm text-gray-500 ml-1">({artist.reviews})</span>
            </div>
            <span className="text-sm font-semibold text-green-600">{artist.priceRange}</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {artist.specialties.slice(0, 3).map((specialty) => (
              <Badge key={specialty} variant="outline" className="text-xs">
                {specialty}
              </Badge>
            ))}
            {artist.specialties.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{artist.specialties.length - 3}
              </Badge>
            )}
          </div>

          <div className="text-xs text-gray-500 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            Responds in {artist.responseTime}
          </div>

          <Button className="w-full">Ask for Quote</Button>
        </div>
      </CardContent>
    </Card>
  )
}

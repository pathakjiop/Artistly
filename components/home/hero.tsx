import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Star, Users, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Book Amazing
                <span className="text-primary block">Performing Artists</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with talented musicians, dancers, speakers, and entertainers from across India. Find the perfect artist for your next event in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/artists">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Artists
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/onboard">Join as Artist</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-gray-600">Artists</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-gray-900">1000+</span>
                </div>
                <p className="text-gray-600">Events</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-purple-200 flex items-center justify-center">
              <img
                src="/img/Main.jpg"
                alt="Artists performing"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Verified Artists</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

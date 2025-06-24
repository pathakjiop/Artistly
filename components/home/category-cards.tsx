import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Users, Mic, Headphones } from "lucide-react"

const categories = [
  {
    name: "Musicians",
    description: "Solo artists, bands, and orchestras",
    icon: Music,
    count: "150+ artists",
    href: "/artists?category=musicians",
  },
  {
    name: "Dancers",
    description: "Classical, contemporary, and cultural dancers",
    icon: Users,
    count: "120+ artists",
    href: "/artists?category=dancers",
  },
  {
    name: "Speakers",
    description: "Motivational and keynote speakers",
    icon: Mic,
    count: "80+ artists",
    href: "/artists?category=speakers",
  },
  {
    name: "DJs",
    description: "Professional DJs for all occasions",
    icon: Headphones,
    count: "100+ artists",
    href: "/artists?category=djs",
  },
]

export function CategoryCards() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the perfect artist for your event from our diverse categories of talented performers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <p className="text-sm text-primary font-medium">{category.count}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

import { Hero } from "@/components/home/hero"
import { CategoryCards } from "@/components/home/category-cards"
import { FeaturedArtists } from "@/components/home/featured-artists"
import { HowItWorks } from "@/components/home/how-it-works"

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <CategoryCards />
      <FeaturedArtists />
      <HowItWorks />
    </div>
  )
}

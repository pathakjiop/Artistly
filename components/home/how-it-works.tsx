import { Card, CardContent } from "@/components/ui/card"
import { Search, MessageCircle, Calendar, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse & Filter",
    description: "Search through our curated list of verified artists and filter by category, location, and budget.",
  },
  {
    icon: MessageCircle,
    title: "Connect & Discuss",
    description: "Reach out to artists directly, discuss your event requirements, and get personalized quotes.",
  },
  {
    icon: Calendar,
    title: "Book & Schedule",
    description: "Confirm your booking, set the date and time, and coordinate all the event details.",
  },
  {
    icon: CheckCircle,
    title: "Enjoy Your Event",
    description: "Sit back and enjoy an amazing performance that will make your event unforgettable.",
  },
  
]

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Booking the perfect artist for your event is simple and straightforward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto -mt-4 text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

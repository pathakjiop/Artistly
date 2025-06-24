import { ArtistOnboardingForm } from "@/components/onboard/artist-onboarding-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artist Onboarding - Artistly",
  description: "Join Artistly as a performing artist. Create your profile and start receiving booking requests.",
}

export default function OnboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Artistly</h1>
        <p className="text-gray-600">Create your artist profile and start receiving booking requests</p>
      </div>
      <ArtistOnboardingForm />
    </div>
  )
}

import { ManagerDashboard } from "@/components/dashboard/manager-dashboard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Manager Dashboard - Artistly",
  description: "Manage your artists and booking requests from your dashboard.",
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manager Dashboard</h1>
        <p className="text-gray-600">Manage your artists and booking requests</p>
      </div>
      <ManagerDashboard />
    </div>
  )
}

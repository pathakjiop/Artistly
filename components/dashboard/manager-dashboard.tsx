"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Eye, Edit, Trash2, Plus, Users, Calendar, BadgeIndianRupee , Star } from "lucide-react"
import { mockArtistSubmissions } from "@/lib/mock-data"

export function ManagerDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredSubmissions = mockArtistSubmissions.filter((submission) => {
    const matchesSearch =
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || submission.status === statusFilter
    const matchesCategory = categoryFilter === "all" || submission.category === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  const stats = [
    {
      title: "Total Artists",
      value: mockArtistSubmissions.length,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Bookings",
      value: mockArtistSubmissions.filter((s) => s.status === "approved").length,
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Pending Reviews",
      value: mockArtistSubmissions.filter((s) => s.status === "pending").length,
      icon: Eye,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Total Revenue",
      value: "₹12,45,000",
      icon: BadgeIndianRupee ,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    }
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Artist Management */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <CardTitle>Artist Submissions</CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Artist
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search artists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Singer">Singer</SelectItem>
                <SelectItem value="Dancer">Dancer</SelectItem>
                <SelectItem value="DJ">DJ</SelectItem>
                <SelectItem value="Speaker">Speaker</SelectItem>
                <SelectItem value="Band">Band</SelectItem>
                <SelectItem value="Folk">Folk Artist</SelectItem>
                <SelectItem value="Bollywood">Bollywood Performer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Artist</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Fee Range</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={submission.image || "/placeholder.svg"}
                          alt={submission.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium">{submission.name}</div>
                          <div className="text-sm text-gray-500">{submission.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{submission.category}</TableCell>
                    <TableCell>{submission.location}</TableCell>
                    <TableCell className="font-medium text-green-600">{submission.feeRange}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(submission.status)}>
                        {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span>{submission.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredSubmissions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No artists found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

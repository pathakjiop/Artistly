"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Upload, CheckCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  bio: z.string().min(50, "Bio must be at least 50 characters"),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
  languages: z.array(z.string()).min(1, "Please select at least one language"),
  feeRange: z.string().min(1, "Please select a fee range"),
  location: z.string().min(2, "Please enter your location"),
  experience: z.string().min(1, "Please select your experience level"),
  website: z.string().url().optional().or(z.literal("")),
  socialMedia: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const categories = ["Singer", "Dancer", "DJ", "Speaker", "Band", "Comedian", "Magician", "Instrumentalist"]

const languages = [
  "Hindi",
  "English",
  "Bengali",
  "Telugu",
  "Marathi",
  "Tamil",
  "Gujarati",
  "Urdu",
  "Kannada",
  "Odia",
  "Punjabi",
  "Malayalam",
  "Assamese",
  "Maithili",
  "Santali",
  "Kashmiri",
  "Nepali",
  "Konkani",
  "Sindhi",
  "Dogri",
  "Manipuri",
  "Bodo",
  "Santhali",
]
const feeRanges = [
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹20,000",
  "₹20,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+"
]

const experienceLevels = [
  "Beginner (0-2 years)",
  "Intermediate (2-5 years)",
  "Advanced (5-10 years)",
  "Expert (10+ years)",
]

export function ArtistOnboardingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bio: "",
      categories: [],
      languages: [],
      feeRange: "",
      location: "",
      experience: "",
      website: "",
      socialMedia: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      console.log("Form submitted:", data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for joining Artistly. We'll review your application and get back to you within 2-3 business days.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location *</FormLabel>
                    <FormControl>
                      <Input placeholder="City, State (e.g., Mumbai, Maharashtra)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself, your experience, and what makes you unique..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Professional Details */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="categories"
              render={() => (
                <FormItem>
                  <FormLabel>Categories * (Select all that apply)</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((category) => (
                      <FormField
                        key={category}
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(category)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, category])
                                    : field.onChange(field.value?.filter((value) => value !== category))
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">{category}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="languages"
              render={() => (
                <FormItem>
                  <FormLabel>Languages Spoken * (Select all that apply)</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {languages.map((language) => (
                      <FormField
                        key={language}
                        control={form.control}
                        name="languages"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(language)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, language])
                                    : field.onChange(field.value?.filter((value) => value !== language))
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">{language}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="feeRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fee Range *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your fee range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {feeRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Profile & Media */}
        <Card>
          <CardHeader>
            <CardTitle>Profile & Media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label>Profile Image (Optional)</Label>
              <div className="mt-2">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    {selectedImage ? (
                      <img
                        src={selectedImage || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                    )}
                    <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourwebsite.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialMedia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social Media (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Instagram, YouTube, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </Form>
  )
}

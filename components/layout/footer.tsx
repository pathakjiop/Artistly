import Link from "next/link"
import { Music, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:divide-x md:divide-gray-800">
          {/* Brand */}
          <div className="space-y-4 md:pr-8">
            <Link href="/" className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Artistly</span>
            </Link>
            <p className="text-gray-400">Connecting event planners with talented performing artists worldwide.</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-gray-400 hover:text-white focus:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-gray-400 hover:text-white focus:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-gray-400 hover:text-white focus:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-gray-400 hover:text-white focus:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* For Event Planners */}
          <div className="md:px-4">
            <h3 className="font-semibold mb-4">For Event Planners</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/artists" className="hover:text-white focus:text-white transition-colors">
                  Browse Artists
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white focus:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white focus:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white focus:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* For Artists */}
          <div className="md:px-4">
            <h3 className="font-semibold mb-4">For Artists</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/onboard" className="hover:text-white focus:text-white transition-colors">
                  Join Artistly
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white focus:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white focus:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white focus:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:pl-4">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white focus:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white focus:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white focus:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white focus:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Artistly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

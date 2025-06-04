import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center space-x-2">
              <Logo />
            </a>
          </div>
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <a href="#" className="text-sm hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Showroom
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Login
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Register
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Dashboard
            </a>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

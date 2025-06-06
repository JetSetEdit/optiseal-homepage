"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import NavItemRenderer from "./navigation/nav-item-renderer"
import { navConfig } from "./navigation/nav-config"
import MobileNavSheet from "./navigation/mobile-nav-sheet"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white text-body shadow-lg relative z-50 font-sans" // Added font-sans for Inter
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-offset-2 rounded">
              <Image
                src="/optiseal-logo-light.png"
                alt="OptiSeal - Simple Sealing Solutions"
                width={300}
                height={100}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navConfig.map((item, index) => (
              <NavItemRenderer key={index} item={item} />
            ))}
            <button
              className="bg-[#0077C8] text-white hover:bg-[#005a9a] focus:bg-[#005a9a] focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-offset-2 px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              aria-label="Get started with OptiSeal"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <MobileNavSheet isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </motion.header>
  )
}

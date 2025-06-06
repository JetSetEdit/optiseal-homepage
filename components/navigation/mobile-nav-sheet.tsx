"use client"
import { useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NavItemRenderer from "./nav-item-renderer"
import { navConfig } from "./nav-config"

interface MobileNavSheetProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export default function MobileNavSheet({ isMenuOpen, setIsMenuOpen }: MobileNavSheetProps) {
  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuOpen, setIsMenuOpen])

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden text-body hover:text-[#0077C8] focus:text-[#0077C8] focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-offset-2 rounded p-1"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white p-6 font-sans" id="mobile-navigation">
        <SheetHeader className="mb-8">
          <SheetTitle>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-offset-2 rounded"
            >
              <Image
                src="/optiseal-logo-light.png"
                alt="OptiSeal - Simple Sealing Solutions"
                width={300}
                height={100}
                className="h-10 w-auto"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
          {navConfig.map((item, index) => (
            <NavItemRenderer key={index} item={item} isMobile={true} onLinkClick={() => setIsMenuOpen(false)} />
          ))}
          <button
            className="bg-[#0077C8] text-white hover:bg-[#005a9a] focus:bg-[#005a9a] focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-offset-2 px-6 py-2 rounded-lg font-semibold transition-colors duration-200 w-fit mt-4"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Get started with OptiSeal"
          >
            Get Started
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

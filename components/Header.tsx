"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import NavItemRenderer from "./navigation/nav-item-renderer"
import { navConfig, NavItem } from "./navigation/nav-config"
import MobileNavSheet from "./navigation/mobile-nav-sheet"
import { Search } from "lucide-react"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command"

interface HeaderProps {
  animateIn?: boolean;
}

export default function Header({ animateIn = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [search, setSearch] = useState("")
  const router = useRouter()

  // Helper to flatten navConfig and deduplicate by href
  type FlatLink = { name: string; href: string }
  function flattenNav(items: NavItem[], parent = ""): FlatLink[] {
    let links: FlatLink[] = []
    for (const item of items) {
      if (item.href && item.href.startsWith("/")) {
        links.push({ name: parent ? `${parent} > ${item.name}` : item.name, href: item.href })
      }
      if (item.children) {
        links = links.concat(flattenNav(item.children, parent ? `${parent} > ${item.name}` : item.name))
      }
    }
    return links
  }
  // Deduplicate by href, keeping the first found label
  function dedupeLinks(links: FlatLink[]): FlatLink[] {
    const seen = new Set<string>()
    const deduped: FlatLink[] = []
    for (const link of links) {
      if (!seen.has(link.href)) {
        seen.add(link.href)
        deduped.push(link)
      }
    }
    return deduped
  }
  const allLinks: FlatLink[] = dedupeLinks(flattenNav(navConfig))
  const filtered: FlatLink[] = search
    ? allLinks.filter((link: FlatLink) => link.name.toLowerCase().includes(search.toLowerCase()))
    : allLinks

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
      initial={animateIn ? { y: -100 } : false}
      animate={animateIn ? { y: 0 } : false}
      transition={animateIn ? { duration: 0.6 } : undefined}
      className="bg-white text-body shadow-lg sticky top-0 z-50 font-sans"
    >
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-offset-2 rounded">
              <Image
                src="/optiseal-logo-light.png"
                alt="Optiseal - Simple Sealing Solutions"
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
            <Link href="/contact-us" passHref legacyBehavior>
              <button
                className="bg-[#0077C8] text-white hover:bg-[#005a9a] focus:bg-[#005a9a] focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-offset-2 px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                aria-label="Get started with Optiseal"
              >
                Get Started
              </button>
            </Link>
            <button
              className="ml-2 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
              aria-label="Search site"
              onClick={() => setSearchOpen(true)}
              type="button"
            >
              <Search className="h-6 w-6 text-gray-600" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <MobileNavSheet isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
      <CommandDialog open={searchOpen} onOpenChange={o => { setSearchOpen(o); setSearch("") }}>
        <CommandInput
          placeholder="Search pages..."
          value={search}
          onValueChange={setSearch}
          autoFocus
        />
        <CommandList>
          {search.trim() === "" ? (
            <div className="py-6 text-center text-muted-foreground text-sm select-none">
              Type to search for a page...
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={search}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Pages">
                  {filtered.map((link: FlatLink) => (
                    <CommandItem
                      key={link.href}
                      value={link.name}
                      onSelect={() => {
                        setSearchOpen(false)
                        setSearch("")
                        router.push(link.href)
                      }}
                    >
                      {link.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </motion.div>
            </AnimatePresence>
          )}
        </CommandList>
      </CommandDialog>
      {/* Contact Info Bar (included in sticky header) */}
      <div className="w-full bg-[#0077C8] text-white text-sm py-2 flex justify-center items-center space-x-6">
        <a href="tel:+61397068005" className="hover:underline font-semibold">+61 3 9706 8005</a>
        <span>|</span>
        <a href="mailto:support@optiseal.com.au" className="hover:underline font-semibold">support@optiseal.com.au</a>
      </div>
    </motion.header>
  )
}

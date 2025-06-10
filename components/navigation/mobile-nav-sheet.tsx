"use client"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Search, ChevronRight, SearchX } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NavItemRenderer from "./nav-item-renderer"
import { navConfig, NavItem } from "./nav-config"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command"
import { useRouter } from "next/navigation"

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

  const [searchActive, setSearchActive] = useState(false)
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
  const allLinks = dedupeLinks(flattenNav(navConfig))
  const filtered = search
    ? allLinks.filter(link => link.name.toLowerCase().includes(search.toLowerCase()))
    : allLinks

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      {/* Only show the hamburger menu button when the sidebar is closed */}
      {!isMenuOpen && (
        <SheetTrigger asChild>
          <button
            className="md:hidden text-body hover:text-[#0077C8] focus:text-[#0077C8] focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-offset-2 rounded p-1"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
      )}
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white p-6 font-sans overflow-y-auto max-h-screen scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} id="mobile-navigation">
        <div className="flex items-center justify-between mb-8">
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
        </div>
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
          <div className="my-2 border-t border-gray-200" />
          {!searchActive ? (
            <button
              className="flex items-center justify-center gap-2 w-full mt-2 px-6 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-offset-2 font-semibold transition-colors duration-200"
              aria-label="Search site"
              onClick={() => { setSearchActive(true); setTimeout(() => { const el = document.getElementById('mobile-search-input'); el && el.focus(); }, 0); }}
              type="button"
            >
              <Search className="h-5 w-5" />
              <span>Search site</span>
            </button>
          ) : (
            <div className="relative mt-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <Search className="h-4 w-4" />
                </span>
                <input
                  id="mobile-search-input"
                  className="w-full pl-9 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077C8] text-sm"
                  placeholder="Search pages..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  autoFocus
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Escape') { setSearchActive(false); setSearch(""); }
                  }}
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700 focus:outline-none"
                  aria-label="Cancel search"
                  onClick={() => { setSearchActive(false); setSearch(""); }}
                  type="button"
                  tabIndex={0}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="mt-2">
                {search.trim() !== "" && (
                  <div className="max-h-48 overflow-y-auto rounded-lg bg-white border border-gray-200 shadow-lg p-1">
                    {filtered.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-8 text-muted-foreground text-sm select-none">
                        <SearchX className="h-8 w-8 mb-2 text-gray-200" />
                        No results found.
                      </div>
                    ) : (
                      filtered.map((link, idx) => (
                        <button
                          key={link.href}
                          className={`w-full flex items-center justify-between text-left px-4 py-2 rounded transition-colors text-sm hover:bg-gray-100 focus:bg-gray-100 outline-none ${idx !== 0 ? 'border-t border-gray-100' : ''}`}
                          onClick={() => {
                            setSearchActive(false)
                            setIsMenuOpen(false)
                            setSearch("")
                            router.push(link.href)
                          }}
                          tabIndex={0}
                        >
                          <span>{link.name}</span>
                          <ChevronRight className="h-4 w-4 text-gray-300 ml-2" />
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

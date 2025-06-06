"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { NavItem } from "./nav-config"

interface NavItemProps {
  item: NavItem
  isMobile?: boolean
  onLinkClick?: () => void
}

const NavItemRenderer: React.FC<NavItemProps> = ({ item, isMobile, onLinkClick }) => {
  const baseLinkClasses = "flex items-center gap-2 py-2 px-3 rounded-md transition-colors duration-200"
  const desktopLinkClasses = "hover:text-primary focus:text-primary focus:outline-none"
  const mobileLinkClasses = "text-body hover:text-primary w-full text-left"
  const [isOpen, setIsOpen] = useState(false)

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false)
    }
  }

  if (item.children && item.children.length > 0) {
    if (isMobile) {
      // Mobile: expandable list
      return (
        <div className="w-full">
          <button
            className={`${mobileLinkClasses} flex justify-between items-center w-full`}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <span>{item.name}</span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {isOpen && (
            <div className="pl-4 mt-2 space-y-2">
              {item.children.map((child, index) => (
                <NavItemRenderer key={index} item={child} isMobile={true} onLinkClick={onLinkClick} />
              ))}
            </div>
          )}
        </div>
      )
    } else {
      // Desktop: Dropdown Menu with enhanced styling
      return (
        <div className="relative">
          <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
              className={`${desktopLinkClasses} flex items-center gap-1 font-medium`}
              onKeyDown={handleKeyDown}
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              {item.name}{" "}
              <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="absolute top-full mt-3 bg-white rounded-md shadow-md z-50 min-w-[240px] border border-gray-200 p-1"
              sideOffset={8}
              align="start"
            >
              {item.children.map((child, index) =>
                child.children && child.children.length > 0 ? (
                  <DropdownMenuSub key={index}>
                    <DropdownMenuSubTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm text-body hover:bg-[#0077C8] hover:text-white focus:bg-[#0077C8] focus:text-white transition-colors duration-200 rounded cursor-pointer font-medium">
                      {child.name}
                      {/* Removed ChevronDown here for cleaner look */}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent
                      className="bg-white rounded-md shadow-md z-50 min-w-[220px] border border-gray-200 p-1 ml-2"
                      sideOffset={4}
                    >
                      {child.children.map((grandchild, gcIndex) => (
                        <DropdownMenuItem key={gcIndex} asChild>
                          <Link
                            href={grandchild.href || `#${grandchild.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            onClick={onLinkClick}
                            className="block w-full px-4 py-2 text-sm text-body hover:bg-[#0077C8] hover:text-white focus:bg-[#0077C8] focus:text-white transition-colors duration-200 rounded no-underline"
                          >
                            {grandchild.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      href={child.href || `#${child.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      onClick={onLinkClick}
                      className="block w-full px-4 py-2 text-sm text-body hover:bg-[#0077C8] hover:text-white focus:bg-[#0077C8] focus:text-white transition-colors duration-200 rounded no-underline font-medium"
                    >
                      {child.name}
                    </Link>
                  </DropdownMenuItem>
                ),
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  } else {
    // Simple link
    return (
      <Link
        href={item.href || `#${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        className={`${isMobile ? mobileLinkClasses : desktopLinkClasses} font-medium`}
        onClick={onLinkClick}
      >
        {item.name}
      </Link>
    )
  }
}

export default NavItemRenderer

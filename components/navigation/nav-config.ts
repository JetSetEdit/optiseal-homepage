export interface NavItem {
  name: string
  href?: string
  children?: NavItem[]
}

export const navConfig: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    children: [
      {
        name: "Construction Sealing Solutions",
        href: "/construction-sealing-solutions"
      },
      {
        name: "Agricultural Sealing Solutions",
        children: [
          { name: "Ponds, Dams & Lakes", href: "/agricultural-ponds-dams-lakes" },
          { name: "Silos & Linings", href: "/agricultural-silos-linings" },
          { name: "Agricultural Repairs", href: "/agricultural-repairs" },
        ],
      },
      {
        name: "Civil & Infrastructure",
        children: [
          { name: "Road Sealing", href: "/civil-road-sealing" },
          { name: "Water Infrastructure", href: "/civil-water-infrastructure" },
          { name: "Outdoor & Marine Grade Sealing", href: "/marine-sealing-solutions" },
        ],
      },
      {
        name: "Automotive, Truck & Caravan",
        children: [
          { name: "Sealing", href: "/automotive-sealing" },
          { name: "Soundproofing", href: "/automotive-soundproofing" },
          { name: "Repair", href: "/automotive-repair" },
        ],
      },
      { name: "Marine Sealing Solutions", href: "/marine-sealing-solutions" },
      {
        name: "Synthetic Tapes",
        children: [
          { name: "Grass Joining Tapes", href: "/synthetic-grass-joining-tapes" },
          { name: "Tactile Surfaces", href: "/synthetic-tactile-surfaces" },
        ],
      },
      { name: "OEM / Private Label Services", href: "/oem-private-label-services" },
    ],
  },
  {
    name: "Services",
    children: [
      { name: "Technical Support & Consultation", href: "/services-tech-support" },
      { name: "Custom Tape Development", href: "/services-custom-tape-development" },
      { name: "Site & Sealing Audits", href: "/services-site-sealing-audits" },
    ],
  },
  {
    name: "Resources",
    children: [
      { name: "Safety Data Sheets", href: "/resources-sds" },
      { name: "Case Studies", href: "/resources-case-studies" },
      { name: "FAQs", href: "/resources-faqs" },
      { name: "Downloads & Technical Docs", href: "/resources-downloads-technical-docs" },
      { name: "Find the Right Tape", href: "/tape-selector" },
    ],
  },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
]

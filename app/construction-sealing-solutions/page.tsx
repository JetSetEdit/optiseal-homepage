import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaDoorOpen, FaWater, FaWind, FaThermometerHalf, FaTree, FaSnowflake, FaCogs } from "react-icons/fa"
import Head from "next/head"

const categories = [
  { name: "Windows & Doors", href: "/construction-windows-doors", icon: <FaDoorOpen className="text-3xl text-primary mb-2" />, subtitle: "Sealing for frames, sills, and more." },
  { name: "Air Tightness", href: "/construction-air-tightness", icon: <FaWind className="text-3xl text-primary mb-2" />, subtitle: "Prevent air leaks and drafts." },
  { name: "Thermal Insulation", href: "/construction-thermal-insulation", icon: <FaThermometerHalf className="text-3xl text-primary mb-2" />, subtitle: "Improve energy efficiency." },
  { name: "Decking & Timber", href: "/construction-decking-timber", icon: <FaTree className="text-3xl text-primary mb-2" />, subtitle: "Protect timber and decking." },
  { name: "Coolroom & SIP Panels", href: "/construction-coolroom-sip-panels", icon: <FaSnowflake className="text-3xl text-primary mb-2" />, subtitle: "Sealing for cold storage and panels." },
  { name: "OPTE2 Innovative Products", href: "/construction-opte2-innovative-products", icon: <FaCogs className="text-3xl text-primary mb-2" />, subtitle: "Specialty construction solutions." },
  { name: "Waterproofing (Sealrite WSM)", href: "#construction-waterproofing", icon: <FaWater className="text-3xl text-primary mb-2" />, subtitle: "Advanced waterproofing solutions." },
]

export default function ConstructionSealingSolutionsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Head>
        <style>{`html { scroll-behavior: smooth; }`}</style>
      </Head>
      <Header />
      {/* Hero Image Section */}
      <section className="relative text-white pt-4 pb-20 lg:py-32 overflow-hidden">
        <img
          src="/gallery/butyl_033.jpg"
          alt="Construction Sealing Solutions hero background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60"
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-header opacity-80 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Construction Sealing Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 text-accent leading-relaxed">
              Explore our range of construction sealing solutions for every application. Select a category below to learn more about each solution.
            </p>
          </div>
        </div>
      </section>
      <div className="container w-full px-4 max-w-screen-lg mx-auto py-6 flex-1">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Construction Sealing Solutions</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
        {/* Category Sections */}
        <div
          className="grid gap-3 justify-center mb-16
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            place-items-center
            items-stretch"
        >
          {[...categories.filter(cat => cat.name !== "Waterproofing (Sealrite WSM)"), categories.find(cat => cat.name === "Waterproofing (Sealrite WSM)")!].map((cat) => (
            <Card
              key={cat.name}
              className="transition hover:shadow-md hover:scale-[1.01] shadow-sm duration-200 border border-gray-200 focus-within:ring-2 focus-within:ring-primary rounded-2xl bg-white flex flex-col items-stretch w-full max-w-xs min-h-[210px] h-full"
            >
              <div className="flex flex-col flex-1 w-full items-center justify-between px-4 py-5 gap-2">
                <div className="flex flex-row items-center gap-2 w-full justify-center mb-1">
                  {cat.icon}
                  <CardTitle className="text-2xl font-bold text-center flex items-center">{cat.name}</CardTitle>
                </div>
                <p className="text-base text-gray-500 text-center min-h-[2rem] flex items-center justify-center w-full mb-2">{cat.subtitle}</p>
                <div className="w-full flex flex-col items-center mt-auto">
                  <Button
                    asChild
                    className="w-full max-w-[320px] mx-auto font-bold text-sm min-h-[44px] shadow-md focus-visible:ring-4 focus-visible:ring-primary/70 focus-visible:outline-none uppercase text-white rounded-xl transition-all duration-150 hover:bg-primary/90 hover:shadow-lg px-4 py-2 whitespace-normal break-words text-center flex items-center justify-center"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.08)' }}
                    aria-label={`Explore ${cat.name}`}
                  >
                    <a href={`#details-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>Explore {cat.name}</a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* Detailed Sections Below Grid */}
        <div className="w-full flex flex-col gap-24">
          {categories.map((cat) => (
            <section
              id={`details-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              key={cat.name}
              className="w-full my-12 scroll-mt-32"
            >
              <div className="border-t-4 border-orange-500 w-full mb-8"></div>
              {/* Placeholder Banner Image - full width */}
              <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen flex justify-center mb-[-60px]">
                <div className="rounded-2xl shadow-lg bg-gray-200 flex items-center justify-center w-full h-64 md:h-80 text-3xl text-gray-400 font-bold">
                  &lt;photo&gt;
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-16 flex flex-col items-center border border-primary/20 mt-[-60px] z-10 relative">
                <div className="flex flex-col items-center mb-6">
                  {cat.icon}
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">{cat.name}</h2>
                  <p className="text-lg md:text-xl text-gray-600 mb-4 text-center max-w-2xl">
                    {cat.subtitle} Our advanced solutions ensure energy efficiency, weather resistance, and long-lasting performance for all types of construction projects. Choose Optiseal for reliable, professional-grade results.
                  </p>
                </div>
                <Button asChild className="font-bold text-base min-h-[44px] shadow-md focus-visible:ring-4 focus-visible:ring-primary/70 focus-visible:outline-none uppercase text-white rounded-xl transition-all duration-150 hover:bg-primary/90 hover:shadow-lg px-8 py-4 whitespace-normal break-words text-center flex items-center justify-center" style={{textShadow: '0 1px 2px rgba(0,0,0,0.08)'}} aria-label={`Contact us about ${cat.name}`}>
                  <a href="#contact">Contact Us About {cat.name}</a>
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
} 
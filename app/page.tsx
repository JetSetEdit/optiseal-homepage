import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import SolutionsGrid from "@/components/SolutionsGrid"
import Products from "@/components/Products"
import Services from "@/components/Services"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsGrid />
      <Products />
      <Services />
      <Footer />
    </main>
  )
}

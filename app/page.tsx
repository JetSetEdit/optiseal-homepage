import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import SolutionsGrid from "@/components/SolutionsGrid"
import Products from "@/components/Products"
import Services from "@/components/Services"
import Footer from "@/components/Footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const galleryImages = [
  "/gallery/butyl_033.jpg",
  "/gallery/butyl_035.jpg",
  "/gallery/butyl_034.jpg",
  "/gallery/butyl_031.jpg",
  "/gallery/butyl_037.jpg",
  "/gallery/butyl_039.jpg",
  "/gallery/butyl_040.jpg",
  "/gallery/butyl_030.jpg",
  "/gallery/butyl_029.jpg",
  "/gallery/butyl_018.jpg",
  "/gallery/butyl_019.jpg",
  "/gallery/butyl_022.jpg",
  "/gallery/butyl_005.jpg",
  "/gallery/butyl_024.jpg",
  "/gallery/butyl_006.jpg",
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header animateIn={true} />
      <HeroSection />
      <section className="my-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Project Gallery</h2>
          <Carousel className="relative max-w-3xl mx-auto">
            <CarouselContent>
              {galleryImages.map((src, idx) => (
                <CarouselItem key={src}>
                  <img
                    src={src}
                    alt={`Optiseal project photo ${idx + 1}`}
                    className="w-full h-72 object-cover rounded-lg shadow-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <SolutionsGrid />
      <Products />
      <Services />
      <Footer />
    </main>
  )
}

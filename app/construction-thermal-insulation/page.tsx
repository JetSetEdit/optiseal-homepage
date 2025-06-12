import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

const galleryImages = [
  "/gallery/butyl_033.jpg",
  "/gallery/butyl_035.jpg",
  "/gallery/butyl_034.jpg",
  "/gallery/butyl_031.jpg",
  "/gallery/butyl_037.jpg",
]

export default function ConstructionWindowsDoorsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-6 flex-1 w-full">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/construction-thermal-insulation">Construction</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Thermal Insulation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero/Title Section */}
        <section className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Construction: Thermal Insulation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            This is a reusable template page for a solution or service. Replace this text with a summary or introduction for the specific page.
          </p>
        </section>

        {/* Alert/Info Block (optional) */}
        <Alert className="mb-8">
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            This page is a template. All content, images, and FAQs are placeholders for demonstration purposes.
          </AlertDescription>
        </Alert>

        {/* Gallery Carousel */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <Carousel className="relative max-w-2xl mx-auto">
            <CarouselContent>
              {galleryImages.map((src, idx) => (
                <CarouselItem key={src}>
                  <img
                    src={src}
                    alt={`Project photo ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <Separator className="my-8" />

        {/* Features/Benefits Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Features & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <Card key={n}>
                <CardHeader>
                  <CardTitle>Feature Title {n}</CardTitle>
                  <CardDescription>Short description of the feature or benefit.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Detailed explanation or value proposition for this feature. Replace with real content.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* FAQ Section */}
        <section className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger>What is this solution for?</AccordionTrigger>
              <AccordionContent>
                This is a placeholder answer. Replace with a real FAQ for this solution or service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>How do I get a quote?</AccordionTrigger>
              <AccordionContent>
                Placeholder answer. Add your process for quotes or contact here.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Call to Action */}
        <section className="text-center my-12">
          <Button size="lg" className="text-lg px-8 py-4">Contact Us for More Information</Button>
        </section>
      </div>
      <Footer />
    </main>
  )
} 
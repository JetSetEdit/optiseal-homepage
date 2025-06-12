"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
  "/gallery/butyl_033.jpg",
  "/gallery/butyl_035.jpg",
  "/gallery/butyl_034.jpg",
  "/gallery/butyl_031.jpg",
  "/gallery/butyl_037.jpg",
]

export default function ContactUsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-6 flex-1 w-full max-w-2xl">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Contact Us</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Contact Info */}
        <section className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Contact Optiseal via email, phone or fax for your butyl adhesives, butyl tapes, Hanno window sealing products or Clear Diamond computer screen protectors, mobile phone protectors, butyl water proofing, flashing or sealing solutions. We can help you work out the best product for your application!
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-2"><span className="font-semibold">Address:</span> 57 JAMIESON WAY, DANDENONG SOUTH 3175, AUSTRALIA</div>
            <div className="mb-2"><span className="font-semibold">Email:</span> <a href="mailto:seals@optiseal.com.au" className="text-primary hover:underline">seals@optiseal.com.au</a></div>
            <div className="mb-2"><span className="font-semibold">Phone:</span> <a href="tel:+61395876022" className="text-primary hover:underline">+61 (03) 9587 6022</a></div>
            <div className="mb-2"><span className="font-semibold">David Morehouse (Performance Solutions):</span></div>
            <div className="ml-4 mb-2"><span className="font-semibold">Mobile:</span> 0448 026 809</div>
            <div className="ml-4 mb-2"><span className="font-semibold">Email:</span> <a href="mailto:solutions@optiseal.com.au" className="text-primary hover:underline">solutions@optiseal.com.au</a></div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-center">Send Us a Message</h2>
          <MultiStepContactForm />
        </section>
      </div>
      <Footer />
    </main>
  )
}

// Multi-step animated contact form
function MultiStepContactForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  function validateName(name: string) {
    if (!name || name.trim().length < 2) return "Please enter your full name."
    return undefined
  }
  function validateEmail(email: string) {
    if (!email) return "Please enter your email."
    // Simple email regex
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Please enter a valid email address."
    return undefined
  }
  function validateMessage(message: string) {
    if (!message || message.trim().length < 10) return "Message must be at least 10 characters."
    return undefined
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault()
    if (step === 1) {
      const nameError = validateName(form.name)
      if (nameError) {
        setErrors({ ...errors, name: nameError })
        return
      }
    }
    if (step === 2) {
      const emailError = validateEmail(form.email)
      if (emailError) {
        setErrors({ ...errors, email: emailError })
        return
      }
    }
    if (step === 3) {
      const messageError = validateMessage(form.message)
      if (messageError) {
        setErrors({ ...errors, message: messageError })
        return
      }
    }
    if (step < 4) setStep(step + 1)
  }

  return (
    <form className="space-y-4 max-w-lg mx-auto" autoComplete="off">
      <AnimatePresence initial={false}>
        {step >= 1 && (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-xl border border-gray-300 focus:border-[#0077C8] focus:ring-2 focus:ring-[#0077C8]/20 transition-all duration-200 px-4 py-2 text-base"
              required
              value={form.name}
              onChange={handleChange}
              onKeyDown={e => e.key === 'Enter' && form.name && step === 1 && handleNext(e as any)}
              autoFocus
              disabled={step !== 1}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            {step === 1 && (
              <Button type="button" size="lg" className="mt-4 w-full text-lg" onClick={e => form.name && handleNext(e as any)} disabled={!form.name}>
                Next
              </Button>
            )}
          </motion.div>
        )}
        {step >= 2 && (
          <motion.div
            key="email"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-xl border border-gray-300 focus:border-[#0077C8] focus:ring-2 focus:ring-[#0077C8]/20 transition-all duration-200 px-4 py-2 text-base"
              required
              value={form.email}
              onChange={handleChange}
              onKeyDown={e => e.key === 'Enter' && form.email && step === 2 && handleNext(e as any)}
              autoFocus={step === 2}
              disabled={step !== 2}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            {step === 2 && (
              <Button type="button" size="lg" className="mt-4 w-full text-lg" onClick={e => form.email && handleNext(e as any)} disabled={!form.email}>
                Next
              </Button>
            )}
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div
            key="message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 block w-full rounded-xl border border-gray-300 focus:border-[#0077C8] focus:ring-2 focus:ring-[#0077C8]/20 transition-all duration-200 px-4 py-2 text-base"
              required
              value={form.message}
              onChange={handleChange}
              onKeyDown={e => e.key === 'Enter' && form.message && step === 3 && handleNext(e as any)}
              autoFocus={step === 3}
              disabled={step !== 3}
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            {step === 3 && (
              <Button type="button" size="lg" className="mt-4 w-full text-lg" onClick={e => form.message && handleNext(e as any)} disabled={!form.message}>
                Next
              </Button>
            )}
          </motion.div>
        )}
        {step === 4 && (
          <motion.div
            key="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Button type="button" size="lg" className="w-full text-lg" disabled>
              Send Message
            </Button>
            <p className="text-center text-gray-500 mt-4">(Form submission is disabled in this preview.)</p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
} 
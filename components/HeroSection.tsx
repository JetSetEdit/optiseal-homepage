"use client"

import { motion } from "framer-motion"

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
const heroImage = galleryImages[Math.floor(Math.random() * galleryImages.length)]

export default function HeroSection() {
  return (
    <section className="relative text-white pt-4 pb-20 lg:py-32 overflow-hidden">
      <img
        src={heroImage}
        alt="Optiseal hero background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60"
        style={{ pointerEvents: 'none' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-header opacity-80 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Simple Sealing Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-accent leading-relaxed"
          >
            Optiseal delivers innovative sealing technologies across construction, automotive, agricultural, and industrial applications.<br />
            From custom development to comprehensive site audits, we provide the expertise you need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Explore Solutions
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

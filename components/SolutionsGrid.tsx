"use client"

import { motion } from "framer-motion"
import { Building, Tractor, Car, HardHat, Package, Settings } from "lucide-react"

const solutions = [
  {
    title: "Construction",
    description: "Weatherproofing and structural sealing solutions for buildings and infrastructure.",
    icon: Building,
    color: "bg-primary",
  },
  {
    title: "Agricultural",
    description: "Durable sealing products for farming equipment and agricultural structures.",
    icon: Tractor,
    color: "bg-success",
  },
  {
    title: "Automotive",
    description: "High-performance seals for vehicles and automotive manufacturing.",
    icon: Car,
    color: "bg-warning",
  },
  {
    title: "Civil",
    description: "Infrastructure sealing solutions for roads, bridges, and public works.",
    icon: HardHat,
    color: "bg-accent",
  },
  {
    title: "Synthetic Tapes",
    description: "Advanced synthetic tape solutions for specialized applications.",
    icon: Package,
    color: "bg-header",
  },
  {
    title: "OEM",
    description: "Custom sealing solutions designed for original equipment manufacturers.",
    icon: Settings,
    color: "bg-primary",
  },
]

export default function SolutionsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-body mb-4">Our Solution Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive sealing solutions tailored to your industry needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div
                  className={`${solution.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-body mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

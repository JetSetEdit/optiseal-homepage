"use client"

import { motion } from "framer-motion"
import { Headphones, Wrench, Search } from "lucide-react"

const services = [
  {
    title: "Tech Support",
    description: "Expert technical assistance and troubleshooting for all OptiSeal products and applications.",
    icon: Headphones,
    features: ["24/7 Support Hotline", "Remote Diagnostics", "Installation Guidance", "Product Training"],
  },
  {
    title: "Custom Development",
    description: "Tailored sealing solutions designed specifically for your unique requirements and applications.",
    icon: Wrench,
    features: ["Bespoke Formulations", "Prototype Development", "Testing & Validation", "Scale-up Support"],
  },
  {
    title: "Site Audits",
    description: "Comprehensive on-site evaluations to optimize your sealing systems and identify improvements.",
    icon: Search,
    features: ["Performance Assessment", "Cost Analysis", "Compliance Review", "Optimization Recommendations"],
  },
]

export default function Services() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-body mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services to ensure your sealing solutions perform at their best
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
            >
              <div className="bg-primary w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-body mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

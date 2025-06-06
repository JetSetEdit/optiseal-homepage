"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const products = [
  {
    title: "WeatherSeal Pro",
    description: "Advanced weatherproofing compound for extreme conditions and long-lasting protection.",
    category: "Construction",
  },
  {
    title: "FlexiTape Industrial",
    description: "High-strength synthetic tape designed for heavy-duty industrial applications.",
    category: "Synthetic Tapes",
  },
  {
    title: "AutoSeal Premium",
    description: "Precision-engineered sealing solutions for automotive manufacturing and repair.",
    category: "Automotive",
  },
  {
    title: "AgroShield",
    description: "Specialized sealing products for agricultural equipment and storage facilities.",
    category: "Agricultural",
  },
]

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-body mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular sealing solutions trusted by professionals worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Image
                  src={`/placeholder_svg.png?height=200&width=200&text=${encodeURIComponent(product.title)}`}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-body mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

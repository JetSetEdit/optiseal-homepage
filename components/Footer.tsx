"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Solutions: ["Construction", "Agricultural", "Automotive", "Civil", "Synthetic Tapes", "OEM"],
    Services: ["Tech Support", "Custom Development", "Site Audits"],
    Company: ["About Us", "Careers", "News", "Contact"],
    Support: ["Documentation", "Training", "Downloads", "FAQ"],
  }

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/optiseal",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/optiseal",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/optiseal",
      icon: Twitter,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/optiseal",
      icon: Instagram,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@optiseal",
      icon: Youtube,
    },
  ]

  return (
    <footer className="bg-white text-body border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="/optiseal-logo-light.png"
              alt="OptiSeal"
              width={300}
              height={100}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-700 mb-4 leading-relaxed">
              Simple Sealing Solutions for every industry. OptiSeal delivers innovative sealing technologies with expert
              support and custom development services.
            </p>

            {/* Address */}
            <address className="text-gray-600 not-italic mb-4">
              <p className="mb-1">OptiSeal Australia Pty Ltd</p>
              <p className="mb-1">57 Jamieson Way</p>
              <p className="mb-1">Dandenong South VIC 3175</p>
              <p className="mb-1">Australia</p>
              <p className="mt-3">
                <a href="tel:+61397068005" className="text-primary hover:underline">
                  +61 3 9706 8005
                </a>
              </p>
            </address>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#0077C8] transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  aria-label={`Follow OptiSeal on ${social.name}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div className="w-full h-[300px] md:h-[400px] rounded-md shadow-md overflow-hidden mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.345567723278!2d145.2203700158246!3d-38.03904567969709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66cdfc0c848e9%3A0x1f8d0a33d0ce7fd0!2sOptiSeal%20Australia%20Pty%20Ltd%2C%2030%20Industrial%20Circuit%2C%20Cranbourne%20West%20VIC%203977!5e0!3m2!1sen!2sau!4v1749190692502!5m2!1sen!2sau"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="OptiSeal Australia Location Map"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 text-sm">© {currentYear} OptiSeal. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0">
            <div className="flex space-x-6">
              <Link href="#privacy" className="text-gray-600 hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-gray-600 hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-gray-600 hover:text-primary text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>

            {/* Social Media Links - Mobile Alternative */}
            <div className="flex space-x-3 sm:hidden">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#0077C8] transition-colors duration-200"
                  aria-label={`Follow OptiSeal on ${social.name}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

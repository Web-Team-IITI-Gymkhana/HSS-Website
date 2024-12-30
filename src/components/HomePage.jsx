import React, { useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Menu, X } from 'lucide-react'

const menuItems = [
  {
    title: "About Us",
    href: "/about", 
    items: [
      { title: "Overview", href: "/about/overview" },
      { title: "About Indore", href: "/about/indore" }
    ]
  },
  {
    title: "Academics",
    href: "/academics",
    items: [
      {
        title: "PhD Program",
        href: "/academics/phd",
        items: [
          { title: "About the Program", href: "/academics/phd/about" },
          { title: "Courses", href: "/academics/phd/courses" },
          { title: "Admission", href: "/academics/phd/admission" }
        ]
      },
      {
        title: "Masters Program",
        href: "/academics/masters",
        items: [
          {
            title: "MS Research",
            href: "/academics/masters/ms",
            items: [
              { title: "About the Program", href: "/academics/masters/ms/about" },
              { title: "Courses", href: "/academics/masters/ms/courses" },
              { title: "Admission", href: "/academics/masters/ms/admission" }
            ]
          },
          {
            title: "MA",
            href: "/academics/masters/ma",
            items: [
              { title: "About the Program", href: "/academics/masters/ma/about" },
              { title: "Courses", href: "/academics/masters/ma/courses" },
              { title: "Admission", href: "/academics/masters/ma/admission" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "People",
    href: "/people",
    items: [
      { title: "Faculty", href: "/faculty" },
      { title: "PhD Students", href: "/people/phd-students" },
      { title: "Alumni", href: "/people/alumni" },
      { title: "Staff", href: "/people/staff" }
    ]
  },
  {
    title: "Research",
    href: "/research",
    items: [
      { title: "Research Areas", href: "/research_areas" },
      { title: "Publications and Papers", href: "/research/publications" },
      { title: "Centers", href: "/research/centers" }
    ]
  },
  {
    title: "Gallery",
    href: "/gallery"
  }
]

function DropdownMenu({ items, isOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
    >
      <div className="py-1" role="menu" aria-orientation="vertical">
        {items.map((item) => (
          <div key={item.title}>
            <a
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-900"
              role="menuitem"
            >
              {item.title}
            </a>
            {item.items && (
              <div className="pl-4">
                {item.items.map((subItem) => (
                  <a
                    key={subItem.title}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-900"
                    role="menuitem"
                  >
                    {subItem.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function Navigationbar() {
  const [openMenus, setOpenMenus] = useState({})
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState([])

  const toggleMenu = (title) => {
    setOpenMenus(prev => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [title]: !prev[title]
    }))
  }

  const toggleExpanded = (title) => {
    setExpandedItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="IIT Indore Logo"
              className="w-10 h-10 mr-2"
            />
            <div>
              <div className="text-lg font-bold text-purple-900">IIT Indore</div>
              <div className="text-sm text-purple-700">Humanities & Social Sciences</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-900"
                  onClick={() => item.items && toggleMenu(item.title)}
                  onKeyDown={(e) => e.key === 'Enter' && item.items && toggleMenu(item.title)}
                >
                  {item.title}
                  {item.items && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                {item.items && <DropdownMenu items={item.items} isOpen={openMenus[item.title]} />}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                height: isMobileMenuOpen ? 'auto' : 0 
              }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    <button
                      className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                      onClick={() => item.items && toggleExpanded(item.title)}
                    >
                      {item.title}
                      {item.items && (
                        <ChevronDown
                          className={`ml-2 h-4 w-4 transform transition-transform ${
                            expandedItems.includes(item.title) ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>
                    {item.items && expandedItems.includes(item.title) && (
                      <div className="pl-4">
                        {item.items.map((subItem) => (
                          <div key={subItem.title}>
                            <a
                              href={subItem.href}
                              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            >
                              {subItem.title}
                            </a>
                            {subItem.items && (
                              <div className="pl-4">
                                {subItem.items.map((nestedItem) => (
                                  <a
                                    key={nestedItem.title}
                                    href={nestedItem.href}
                                    className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                  >
                                    {nestedItem.title}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}

function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigationbar />

      <main>
        <section className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 text-white py-20 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/placeholder.svg?height=200&width=200')",
              backgroundSize: "200px",
              opacity,
              scale,
            }}
            animate={{
              backgroundPositionX: ["0px", "200px"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <div className="container mx-auto text-center relative z-10">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              Bridging Tradition and Innovation
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              Explore the intersection of timeless wisdom and cutting-edge research at IIT Indore's Department of Humanities and Social Sciences.
            </motion.p>
            <motion.div 
              className="space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="bg-white text-purple-900 hover:bg-purple-100 px-6 py-2 rounded-md text-lg font-medium">
                Explore Programs
              </button>
              <button className="text-white border-white border hover:bg-purple-800 px-6 py-2 rounded-md text-lg font-medium">
                Learn More
              </button>
            </motion.div>
          </div>
        </section>

        {/* Add other sections here (Research Highlights, News & Updates, etc.) */}

      </main>

      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Department of Humanities and Social Sciences, IIT Indore. All rights reserved.</p>
          <p className="mt-2 text-sm">विद्या ददाति विनयम् (Knowledge Gives Humility)</p>
        </div>
      </footer>
    </div>
  )
}

export {Home,Navigationbar};

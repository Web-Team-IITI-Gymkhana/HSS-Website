import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Mail, Phone } from 'lucide-react';
import { Navigationbar } from './HomePage';
const facultyMembers = [
  {
    name: "Dr. Nirmala Menon",
    position: "Professor",
    specialization: "Digital Humanities, Postcolonial Studies, World Literature",
    email: "nmenon@iiti.ac.in",
    phone: "+91-731-660 (Ext. 3368)",
    image: "/placeholder.svg",
    website: "https://example.com"
  },
  {
    name: "Dr. Priyanka Srivastava",
    position: "Associate Professor",
    specialization: "Economic History, Labor History, Gender Studies",
    email: "priyanka@iiti.ac.in",
    phone: "+91-731-660 (Ext. 3369)",
    image: "/placeholder.svg",
    website: "https://example.com"
  },
  {
    name: "Dr. Soham Baksi",
    position: "Assistant Professor",
    specialization: "Environmental Economics, Resource Economics",
    email: "sbaksi@iiti.ac.in",
    phone: "+91-731-660 (Ext. 3370)",
    image: "/placeholder.svg",
    website: "https://example.com"
  }
];

export default function FacultyList() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);

  const toggleExpand = (index) => {
    setExpandedFaculty(expandedFaculty === index ? null : index);
  };

  return (
    
    <div className="min-h-screen bg-gray-50">
      <Navigationbar />
      <header className="py-8 bg-purple-900 text-white text-center">
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Faculty
        </motion.h1>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64 w-full">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-purple-900">{faculty.name}</h2>
                  <p className="text-gray-600 mb-2">{faculty.position}</p>
                  <p className="text-sm text-gray-500 mb-4">{faculty.specialization}</p>

                  <div className="flex items-center mb-2">
                    <Mail className="w-4 h-4 mr-2 text-purple-600" />
                    <a href={`mailto:${faculty.email}`} className="text-sm text-purple-600 hover:underline">
                      {faculty.email}
                    </a>
                  </div>

                  <div className="flex items-center mb-4">
                    <Phone className="w-4 h-4 mr-2 text-purple-600" />
                    <span className="text-sm text-gray-600">{faculty.phone}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      className="text-purple-600 border border-purple-600 hover:bg-purple-50 px-3 py-1 rounded"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedFaculty === index ? 'Less Info' : 'More Info'}
                      <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${expandedFaculty === index ? 'rotate-180' : ''}`} />
                    </button>
                    <a href={faculty.website} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:bg-purple-50 px-3 py-1 rounded">
                      Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>

                  {expandedFaculty === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <h3 className="text-lg font-semibold mb-2 text-purple-900">Research Interests</h3>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Interest 1</li>
                        <li>Interest 2</li>
                        <li>Interest 3</li>
                      </ul>
                      <h3 className="text-lg font-semibold mt-4 mb-2 text-purple-900">Recent Publications</h3>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Publication 1 (2023)</li>
                        <li>Publication 2 (2022)</li>
                        <li>Publication 3 (2021)</li>
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-purple-900 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Department of Humanities and Social Sciences, IIT Indore. All rights reserved.</p>
          <p className="mt-2 text-sm">विद्या ददाति विनयम् (Knowledge Gives Humility)</p>
        </div>
      </footer>
    </div>
  );
}

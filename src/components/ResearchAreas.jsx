import React from 'react'
import { motion } from 'framer-motion'
import { Navigationbar } from './HomePage'
const researchAreas = [
  {
    title: "Cognitive Science",
    description: "Cognitive Science is an interdisciplinary field that combines perspectives from psychology, neuroscience, linguistics, philosophy, and computer science to study the mind and its processes. Our research in this area focuses on understanding human cognition, perception, language processing, and decision-making.",
    topics: [
      "Cognitive Psychology",
      "Neurolinguistics",
      "Artificial Intelligence and Cognitive Modeling",
      "Philosophy of Mind"
    ]
  },
  {
    title: "Digital Humanities",
    description: "Digital Humanities applies computational tools and methods to traditional humanities disciplines. Our research explores how digital technologies can enhance our understanding of literature, history, and culture.",
    topics: [
      "Text Mining and Analysis",
      "Digital Archives and Preservation",
      "Visualization of Cultural Data",
      "Digital Pedagogy"
    ]
  },
  {
    title: "Economics",
    description: "Our economics research covers a wide range of topics, from microeconomic theory to macroeconomic policy. We focus on both theoretical and empirical approaches to understanding economic phenomena.",
    topics: [
      "Development Economics",
      "Environmental Economics",
      "Behavioral Economics",
      "Econometrics"
    ]
  },
  {
    title: "English",
    description: "Our English department conducts research in various areas of literature, linguistics, and cultural studies. We explore both classical and contemporary works, as well as the evolution of the English language.",
    topics: [
      "Postcolonial Literature",
      "Comparative Literature",
      "Discourse Analysis",
      "World Englishes"
    ]
  },
  {
    title: "Philosophy",
    description: "Our philosophy research covers a broad spectrum of philosophical inquiries, from ancient philosophy to contemporary debates. We engage with both Western and Eastern philosophical traditions.",
    topics: [
      "Ethics and Moral Philosophy",
      "Philosophy of Science",
      "Indian Philosophy",
      "Political Philosophy"
    ]
  },
  {
    title: "Psychology",
    description: "Our psychology research spans various subfields, focusing on understanding human behavior, cognition, and mental processes. We employ both experimental and observational methods in our studies.",
    topics: [
      "Social Psychology",
      "Clinical Psychology",
      "Developmental Psychology",
      "Cognitive Neuroscience"
    ]
  },
  {
    title: "Sociology",
    description: "Our sociology research examines social structures, interactions, and phenomena. We study how societies function and change, with a particular focus on contemporary issues in India and globally.",
    topics: [
      "Urban Sociology",
      "Gender Studies",
      "Social Movements",
      "Sociology of Education"
    ]
  }
]

const ResearchAreaCard = ({ title, description, topics, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-purple-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <h4 className="text-lg font-semibold mb-2 text-purple-700">Key Research Topics:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const ResearchAreas = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-0">
        <Navigationbar />
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-purple-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Research Areas
        </motion.h1>
        <motion.p 
          className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The Department of Humanities and Social Sciences at IIT Indore conducts cutting-edge research across various disciplines. Our faculty and students are engaged in innovative projects that address complex societal challenges and contribute to the advancement of knowledge.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <ResearchAreaCard key={index} {...area} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResearchAreas
'use client';
import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "PostgreSQL", level: 70, icon: "🐘" },
        { name: "REST APIs", level: 85, icon: "🔗" },
        { name: "GraphQL", level: 65, icon: "📊" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, icon: "📚" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Figma", level: 80, icon: "🎯" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Webpack", level: 75, icon: "📦" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out transform origin-left"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Other Technologies I Work With
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Python", "Java", "C++", "Firebase", "Netlify", "Vercel", 
                "Redux", "Zustand", "Framer Motion", "Three.js", "D3.js", 
                "Jest", "Cypress", "Sass", "Bootstrap", "Material-UI"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Certifications & Learning
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">AWS Certified Developer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-xl">📜</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">React Developer Certification</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Meta (Facebook)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

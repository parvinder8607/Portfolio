'use client';
import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      description: "Leading frontend development for enterprise applications using React and Next.js. Mentoring junior developers and implementing best practices for code quality and performance.",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led a team of 5 developers on multiple projects",
        "Implemented automated testing reducing bugs by 60%"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Pro",
      period: "2021 - 2022",
      location: "New York, NY",
      description: "Developed and maintained web applications for various clients. Worked on both frontend and backend development using modern technologies and frameworks.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Reduced server response time by 35% through optimization",
        "Implemented responsive designs for mobile-first approach"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS"]
    },
    {
      title: "Frontend Developer",
      company: "StartUp Innovations",
      period: "2020 - 2021",
      location: "San Francisco, CA",
      description: "Built user interfaces for a fast-growing startup. Collaborated with designers and backend developers to create seamless user experiences.",
      achievements: [
        "Developed the company's main product interface from scratch",
        "Increased user engagement by 50% through UI/UX improvements",
        "Integrated third-party APIs and payment systems"
      ],
      technologies: ["React", "JavaScript", "CSS3", "REST APIs", "Firebase"]
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Studios",
      period: "2019 - 2020",
      location: "Austin, TX",
      description: "Started my professional journey as a web developer. Learned industry best practices and contributed to various client projects.",
      achievements: [
        "Successfully completed 10+ website projects",
        "Learned modern development workflows and tools",
        "Contributed to open-source projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and the impact I've made
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300">
                        <span className="font-medium">{exp.company}</span>
                        <span className="hidden sm:inline mx-2">•</span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Bachelor of Computer Science</h4>
                    <p className="text-gray-600 dark:text-gray-300">University of Technology</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2015 - 2019</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Graduated with honors. Specialized in software engineering and web development.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600 dark:text-green-400 text-xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Full Stack Web Development</h4>
                    <p className="text-gray-600 dark:text-gray-300">Coding Bootcamp</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2019</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Intensive 6-month program focusing on modern web development technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

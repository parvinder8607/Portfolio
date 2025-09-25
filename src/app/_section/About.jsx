"use client";
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from([".about-title", ".about-sub"], {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 80%"
        }
      });

      // Left image and right content
      gsap.from(".about-image", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 75%"
        }
      });
      gsap.from(".about-content", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 75%"
        }
      });

      // Stats cards pop
      gsap.from(".about-stat", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 70%"
        }
      });

      // Progress bars grow
      gsap.utils.toArray(".about-progress-bar").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%"
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="about-header text-center mb-16">
            <h2 className="about-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="about-sub text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="about-grid grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="about-image relative">
              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gray-600 dark:text-gray-300">YN</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-gray-200 dark:border-gray-700 rounded-2xl -z-10"></div>
            </div>

            {/* Right Column - Content */}
            <div className="about-content space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Hello! I'm a passionate developer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  With over 3 years of experience in web development, I specialize in creating 
                  modern, responsive applications using cutting-edge technologies. I love turning 
                  complex problems into simple, beautiful, and intuitive solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="about-stat text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="about-stat text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</div>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Core Skills</h4>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Frontend Development</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="about-progress-bar bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Backend Development</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="about-progress-bar bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">UI/UX Design</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="about-progress-bar bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

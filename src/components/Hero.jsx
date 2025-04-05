import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import me from '../components/me.jpg'
import resume from '../components/resume.pdf'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left md:flex-1 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">
              <Typewriter
                options={{
                  strings: ['Atul Khiyani', 'a Developer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                  wrapperClassName: "inline",
                  cursorClassName: "text-blue-600 dark:text-blue-400"
                }}
              />
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-fade-in">
          Full Stack Developer passionate about building robust and user-friendly web applications. Skilled in modern web technologies, focusing on creating scalable, maintainable, and visually appealing solutions. Proficient in backend development following industry standards, including the use of MongoDB pipelines for data aggregation and efficient processing. Dedicated to delivering high-quality code and seamless user experiences.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://github.com/Atulkhiyani0909"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:scale-105"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/atul-khiyani-880b382a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
            <a
              href="mailto:atulkhiyani09@gmail.com"
              className="flex items-center px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-105"
            >
              <Mail size={20} className="mr-2" />
              Email Me
            </a>
            <a
              href={resume}
              download
              className="flex items-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white transition-all hover:scale-105"
            >
              <Download size={20} className="mr-2" />
              Resume
            </a>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-blue-600 dark:ring-blue-400 animate-bounce-subtle">
            <img
              src={me}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg animate-fade-in">
            <p className="text-blue-600 dark:text-blue-400 font-semibold">Available for hire</p>
          </div>
        </div>
      </div>
    </section>
  );
}
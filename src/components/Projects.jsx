import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import wanderLust from '../components/wanderlust.jpg'
import mailplanner from '../components/mailplanner.jpg'
import videoapp from '../components/videoapp.jpg'

const projects = [
  {
    title: 'WanderLust',
    description: 'WanderLust is an intuitive property listing website that enables users to explore, rate, and comment on various properties. Users can view property details, leave reviews, and check property locations directly on an interactive map. Whether searching for a new home or just browsing, WanderLust provides a user-friendly experience to discover and engage with listed properties',
    image:wanderLust,
    tech: ['JavaScript', 'MongoDB','Node js','Express js','RESTfull APIs','passport','express-session & cookies','Mapmy India','Cloudinary','BootStrap'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://wanderlust-kdst.onrender.com/listings'
  },
  {
    title: 'MailPlanner',
    description: 'MailPlanner is an efficient bulk email scheduling tool that allows users to send personalized emails at specified times. Utilizing Nodemailer and Cron Jobs, MailPlanner automates the process of sending emails with precision. Additionally, the platform integrates AI to generate engaging and professional email content, making it perfect for both personal and professional communication.',
    image:mailplanner ,
    tech: ['Nodemailer','Cron jobs','Cloudinary','passport','JavaScript','express-sessions & cookies', 'MongoDB', 'Google Gemini API'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://mailplanner.onrender.com/login'
  },
  {
    title: 'Video Application -> Youtube',
    description: 'Video Application is a YouTube-like platform that prioritizes backend efficiency and security. Built using the MVC pattern, it leverages MongoDB aggregation pipelines for advanced data processing—handling filtering, sorting, and pagination (with limit and skip). The backend adheres to industry standards with JWT-based authentication, including session management, access tokens, and refresh tokens for secure and persistent logins',
    image: videoapp,
    tech: ['JWT','Pagination','Aggregation pipelines','MongoDB','MVC model','JavaScript','RESTfull APIs','Cloudinary','express-validator','Cookies','React'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.example.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-xl animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="relative overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm transition-all hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
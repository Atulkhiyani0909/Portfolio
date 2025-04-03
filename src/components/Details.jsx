import React from 'react';
import { Code, Globe, Briefcase, GraduationCap, Award, Coffee } from 'lucide-react';

const skills = [
  'React', 'JavaScript', 'Node.js',' Express.js','JWT & OAuth','Socket.IO', 'MongoDB aggregation pipeline','MongoDB','RESTful APIs','Git and GitHub','MVC (Model-View-Controller)','Java','Tailwind CSS','HTML','CSS'
];


export default function Details() {
  return (
    <section id="details" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Skills Section */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="flex items-center space-x-3">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:scale-105 hover:shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Globe, value: '4+', label: 'Projects Completed' },
            { icon: Globe, value: '3+', label: 'Projects Currently Working on Ex- \n   Developing "Easy Complaints to Gov Services," a platform simplifying public service complaint filing with a dashboard for government officials to track complaint status.' },
            { icon: GraduationCap, value: 'B. Tech', label: 'Airtificial Intelligence & Data Science \n 2023-2027' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
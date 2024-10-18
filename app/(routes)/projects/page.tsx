import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    link: '#',
  },
  {
    title: 'Project 4',
    description: 'Description of project 4',
    link: '#',
  },
  {
    title: 'Project 5',
    description: 'Description of project 5',
    link: '#',
  },
  {
    title: 'Project 6',
    description: 'Description of project 6',
    link: '#',
  },
  {
    title: 'Project 7',
    description: 'Description of project 7',
    link: '#',
  },
];

const ProjectComponent: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#1f1934] text-white">
      {/* Left side - Image */}
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="https://via.placeholder.com/400"
          alt="Placeholder"
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right side - Projects */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-right">My Projects</h2>

        {/* Scrollable container for projects */}
        <div className="space-y-5 max-h-[500px] overflow-y-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;


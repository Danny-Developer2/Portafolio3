"use client"

"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  info: string;
}

const ProjectComponent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api-fq9vggvd4-danny-developer2s-projects.vercel.app/dataProyects');
        // Accede a la propiedad "projects" del objeto de respuesta
        if (response.data.projects && Array.isArray(response.data.projects)) {
          setProjects(response.data.projects);
        } else {
          setError("Unexpected response format");
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError("Failed to fetch projects");
      }
      
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex h-screen bg-[#1f1934] text-white">
      {/* Left side - Image */}
      <div className="w-1/2 hidden sm:flex flex items-center justify-center">
        <Image
          src="https://www.ldhmsoftware.com/wp-content/uploads/2023/11/0_cl7fc6pt1MHjIF4K-1024x622.png"
          width={400}
          height={400}
          alt="Placeholder"
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right side - Projects */}
      <div className="w-full p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>

        {/* Scrollable container for projects */}
        <div className="space-y-5 max-h-[500px] overflow-y-auto">
  {projects.map((project, index) => (
    <div
      key={index}
      className="p-14 bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
    >
      {/* Flex container to center content horizontally and vertically */}
      <div className="flex flex-col justify-center items-center text-center h-full">
        <img
          src={project.img}
          alt="Placeholder"
          style={{ width: "200px", height: "150px" }} // Image size
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
        <h3 className="text-xl font-semibold mt-4">{project.name}</h3> {/* Add margin to separate elements */}
        <h1>Descripcion</h1>
        <p className="text-gray-300 mt-2">{project.info}</p>
        <a
          href={project.url}
          className="text-blue-400 hover:underline mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
///////////////////////////////////////////////



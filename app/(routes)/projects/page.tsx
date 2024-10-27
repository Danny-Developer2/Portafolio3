"use client";

import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import Image from 'next/image';

class DataProjects {
  id: number;      // Define el tipo de id
  name: string;    // Define el tipo de name
  url: string;     // Define el tipo de url
  img: string;     // Define el tipo de img
  info: string;    // Define el tipo de info

  constructor(id: number, name: string, url: string, img: string, info: string) {
      this.id = id;
      this.name = name;
      this.url = url;
      this.img = img;
      this.info = info;
  }
}

// Cambia el nombre de la variable de proyectos aquí
const dataProjects = [
  new DataProjects(
      1,
      "Pokemon",
      "https://github.com/JuanDanielRuiz/PI-Pokemon-main",
      "https://th.bing.com/th/id/OIP.a8tQwY6SUtqjE-EV5nYGkgHaFj?pid=ImgDet&rs=1",
      "Pokédex interactivo en React con API de Pokémon"
  ),
  new DataProjects(
      2,
      "Rick and Morty",
      "https://github.com/JuanDanielRuiz/Rick--and--Morty",
      "https://th.bing.com/th/id/OIP.ssKWuuwES24mQz7kFXAotgHaHa?pid=ImgDet&rs=1",
      "Universo interactivo en React con datos de la API de Rick and Morty"
  ),
  new DataProjects(
      3,
      "BookStore",
      "https://github.com/JoseAlbertoFC/BookStorePF",
      "https://th.bing.com/th/id/R.43f7c442071f42f9a108aa8f626c8c6d?rik=oEqOCKTq%2bF2wMg&pid=ImgRaw&r=0",
      "Tienda online en React con integración de pago seguro"
  ),
  new DataProjects(
      4,
      "Portafolio",
      "https://github.com/Danny-Developer2/Portafolio3",
      "https://portafolio3-o9v6.vercel.app/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.f37cd02d.png&w=1920&q=75",
      "Portafolio creado en Next.js con Tailwin para los estilos"
  )
];

const ProjectComponent: React.FC = () => {
  const [projects, setProjects] = useState<DataProjects[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (dataProjects.length > 0) {
        setProjects(dataProjects); // Aquí estableces los proyectos directamente
      } else {
        setError("No se encontraron proyectos.");
      }
    } catch (error) {
      setError("Error al establecer los proyectos: " + error);
    }
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente


    




  //const [error, setError] = useState<string | null>(null);
  
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       // Usa la variable de entorno para la URL de la API
  //       const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Obtiene la URL de la variable de entorno
        
  //       // Verifica que apiUrl esté definido
  //       if (!apiUrl) {
  //         setError("API URL is not defined.");
  //         return; // Sale de la función si no hay URL
  //       }

  //       const response = await axios.get(apiUrl);
        
  //       // Accede a la propiedad "projects" del objeto de respuesta
  //       if (response.data.projects && Array.isArray(response.data.projects)) {
  //         setProjects(response.data.projects);
  //       } else {
  //         setError("Unexpected response format");
  //       }
  //     } catch {
  //       setError("Failed to fetch projects");
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return (
<div className="flex h-screen bg-[#1f1934] text-white">
  {/* Left side - Image with Text */}
  <div className="hidden sm:flex w-1/2 flex items-center justify-center relative overflow-hidden">
    <Image
      src="https://www.ldhmsoftware.com/wp-content/uploads/2023/11/0_cl7fc6pt1MHjIF4K-1024x622.png"
      width={700}
      height={700}
      alt="Placeholder"
      className="w-full h-auto rounded-lg shadow-lg"
    />
    {/* Animated Text */}
    <div className="absolute top-5 left-0 right-0 flex items-start justify-center">
      <span className="text-5xl font-bold text-white animate-slide-in">
        Mis Proyectos Web
      </span>
    </div>
  </div>
  {/* Right Side - Projects */}
  <div className="w-1/2 p-8 flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-6 text-center"></h2>

    {/* Mostrar mensaje de error si existe */}
    {error ? (
      <p className="text-red-500 text-center">{error}</p>
    ) : (
      projects.length === 0 && <p>No hay proyectos disponibles.</p>
    )}

    {/* Scrollable container for projects */}
    <div className="space-y-5 max-h-[500px] overflow-y-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-14 bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col justify-center items-center text-center h-full">
            <Image
              src={project.img}
              alt={project.name}
              width={400}
              height={400}
              style={{ width: "200px", height: "150px" }}
              className="w-3/4 h-auto rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
            <h1>Descripción</h1>
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

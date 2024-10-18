/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, // Para asegurar que las rutas funcionen correctamente
    images: {
      domains: ['raw.githubusercontent.com'], // Agrega aquí el dominio de las imágenes que usas
    },
  };
  
  export default nextConfig;
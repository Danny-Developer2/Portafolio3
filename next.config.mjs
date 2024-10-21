/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, // Para asegurar que las rutas funcionen correctamente
    images: {
      domains: ['raw.githubusercontent.com','via.placeholder.com','www.ldhmsoftware.com'] // Agrega aquí el dominio de las imágenes que usas
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // O el dominio específico que uses, por ejemplo: "my-image-host.com"
        },
      ],
    },
  };
  
  export default nextConfig;
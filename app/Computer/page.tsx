"use client"
const Computer = () => {


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
            "HTB ACADEMY",
            "https://academy.hackthebox.com/achievement/249178/49",
            "https://academy.hackthebox.com/storage/modules/49/logo.png",
            "Windows Fundamentals"
        ),
        new DataProjects(
            2,
            "Web CAP",
            "https://www.hackthebox.com/achievement/machine/401626/351",
            "https://labs.hackthebox.com/storage/avatars/70ea3357a2d090af11a0953ec8717e90.png",
            "Preview course on web Cap."
        ),
        new DataProjects(
            3,
            "Achievements",
            "https://academy.hackthebox.com/achievement/249178/35",
            "https://labs.hackthebox.com/storage/avatars/3ec233f1bf70b096a66f8a452e7cd52f.png",
            "Achievement badge."
        ),
        new DataProjects(
            4,
            "Machine Miau",
            "https://www.hackthebox.com/achievement/machine/401626/394",
            "https://labs.hackthebox.com/storage/avatars/61b5837dfdfe1fb1ca3750cf2712da44.png",
            "Achievement badge Miau."
        ),
        new DataProjects(
            5,
            "Achievement 3",
            "https://www.hackthebox.com/achievement/machine/401626/393",
            "https://labs.hackthebox.com/storage/avatars/b64f85071e626e4cc2272d54332e4131.png",
            "Achievement badge for a machine."
        ),
        new DataProjects(
            6,
            "Dance",
            "https://www.hackthebox.com/achievement/machine/401626/395",
            "https://labs.hackthebox.com/storage/avatars/ce52eadd09ff5a28a1eea8c65d6683a9.png",
            "Achievement badge Dance."
        ),
        new DataProjects(
            7,
            "Achievement 5",
            "https://www.hackthebox.com/achievement/machine/401626/472",
            "https://labs.hackthebox.com/storage/avatars/cdf77651ab0a4eca65acd5cf388b4c66.png",
            "Achievement badge for a machine."
        ),
        new DataProjects(
            8,
            "Achievement 6",
            "https://www.hackthebox.com/achievement/machine/401626/631",
            "https://labs.hackthebox.com/storage/avatars/b8f3d660af2d3ed0929eb119e33526cf.png",
            "Achievement badge for a machine."
        ),
        new DataProjects(
            9,
            "Editorial",     
            "https://www.hackthebox.com/achievement/machine/401626/608",
            "https://labs.hackthebox.com/storage/avatars/a466db5ce4f7aaea98f588d1cb71a0aa.png",
            "Achievement badge Editorial."
        ),
        new DataProjects(
          10,
          "Web Requests Course",
          "https://academy.hackthebox.com/achievement/249178/35",
          "https://academy.hackthebox.com/storage/modules/35/logo.png",
          "Preview course on web requests."
      ),
      new DataProjects(
        10,
        "Web Jvascript",
        "https://academy.hackthebox.com/achievement/249178/41",
        "https://academy.hackthebox.com/storage/modules/41/logo.png",
        "Preview course Deobfuscation."
    )
      ];
    return (
        <div className="flex flex-col justify-start items-center h-screen bg-[#1f1934] text-white">
  <h2 className=" hidden sm:flex text-6xl font-bold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 animate-slide-in">
    Ciberseguridad
  </h2>
  <h1 className=" hidden sm:flex text-4xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 animate-slide-in delay-150">
    Maquinas de Hackthebox
  </h1>

  {/* Tailwind custom animation styles */}
  <style jsx>{`
    @keyframes slideIn {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .animate-slide-in {
      animation: slideIn 1.5s ease forwards;
    }
  `}</style>

  {/* Contenedor para los proyectos */}
  <div className="mt-36 overflow-y-auto h-100%"> {/* Establece una altura fija y permite el desplazamiento vertical */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-2xl">
      {dataProjects.map((data, index) => ( // Muestra todos los proyectos
        <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in delay-150 bg-gradient-to-r from-purple-400 to-blue-400">
          <img
            src={data.img}
            alt="Placeholder"
            style={{ width: "200px", height: "130px" }} // Tamaño de la imagen
            className="block mx-auto rounded-lg shadow-lg"
          />

          <h3 className="text-xl font-roboto text-black text-center">{data.name}</h3>
          <p className="text-gray-300 text-center">{data.info}</p>
          
          {/* Contenedor para el botón */}
          <div className="flex justify-center mt-4">
            <a
              href={data.url} // Reemplaza esto con la URL deseada
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Mejora la seguridad
            >
              <button className="flex items-center bg-gradient-to-r from-purple-500 to-orange-400 text-white px-4 py-2 rounded shadow hover:bg-purple-600 transition">
                <i className="fas fa-pencil-alt mr-2"></i>
                Certificado
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Tailwind custom animation styles */}
  <style jsx>{`
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease forwards;
    }
  `}</style>
</div>

    )
}

export default Computer
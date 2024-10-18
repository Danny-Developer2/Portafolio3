"use client"

import React, { useState ,ChangeEvent, FormEvent } from 'react';

const Mail = () => {
  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    const { nombre, email, asunto, mensaje } = formData;
    if (!nombre || !email || !asunto || !mensaje) {
      alert('Tienes que rellenar todos los campos');
      return; // Evitar el envío si algún campo está vacío
    }
    alert('Mail Enviado con exito')
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    //try {
      // Realizar la petición al backend
      //const response = await fetch('/api/send-email', {
        //method: 'POST',
        //headers: {
        //  'Content-Type': 'application/json',
        //},
        //body: JSON.stringify(formData), // Envía el objeto formData
      }//);

      //if (response.ok) {
        //alert('Correo enviado exitosamente!');
        // Limpiar el formulario si es necesario
        //setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      //} else {
       // alert('Hubo un problema al enviar el correo');
     // }
   // } catch (error) {
    //  console.error('Error al enviar el correo:', error);
     //alert('Hubo un error al enviar el correo');
    //}
  //};
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f1934]">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Contáctame</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Ingresa tu Nombre completo"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Tu correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Ingresa tu email"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="asunto" className="block text-gray-700 font-medium mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              value={formData.asunto}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Ingresa tu Asunto"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Ingresa tu Mensaje"
              
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FFA500] text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Enviar
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default Mail;

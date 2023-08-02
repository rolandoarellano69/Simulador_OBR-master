import React, { useState } from 'react'
import AureoPeek from '../../assets/images/ACCESO AUREO 2noche 4K.jpg'
import { RiUserLine, RiMailLine, RiPhoneLine } from "react-icons/ri"
const Contact = () => {
  const [formData, SetFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
  })

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value.replace(/[^0-9]/g, '');
    SetFormData({ ...formData, telefono: phoneNumber })
  };
 const handleEmailChange = (e) => {
  const email = e.target.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(email) || email=== ''){
    SetFormData({...formData, correo: email})
  }
};
  return (
    <div className='lg:px-4 py-6 rounded-lg w-full text-black'>

      <h3 className="py-4 text-3xl font-sans text-center">Contacto</h3>
      {/* 
      <div className='relative w-full'>
          <figure className='relative w-full'>
            <img src={AureoPeek} alt="Imagen" className='h-auto max-w-full rounded-tl-lg' />
          </figure>
        </div> */}
      <div classname="grid grid-cols-2 lg:grid-cols-2 ">

        <form className='mt-4 gap-8 lg:grid grid-cols-2'>

          <div className='flex flex-col gap-8 '>
            <div className='flex items-center'>
              <RiUserLine className="text-[#B78D4E] text-lg mr-2 ml-2" />
              <input type="text" placeholder='Nombre(s)' className='rounded-lg mr-4 w-full py-3 pl-8 pr-4 ' />
            </div>

            <div className='flex items-center'>
              <RiUserLine className="text-[#B78D4E] text-lg mr-2 ml-2" />
              <input type="text" placeholder='Apellidos' className='rounded-lg py-3 mr-4 w-full pl-8 pr-4 ' />
            </div>

            <div className='flex items-center'>
              <RiMailLine className="text-[#B78D4E]  text-lg mr-2 ml-2" />
              <input type="email"
              name='correo'
              value={formData.correo}
              onChange={handleEmailChange} 
              placeholder='Correo' className='rounded-lg py-3 mr-4 w-full pl-8 pr-4 ' />
            </div>

            <div className='flex items-center'>
              <RiPhoneLine className="text-[#B78D4E] mr-2 text-lg ml-2 " />
              <input
               type="text"
               placeholder='Telefono'
               name='telefono'
               value={formData.telefono} 
               onChange={handlePhoneNumberChange} 
               maxLength="10"
                className='rounded-lg py-3 mr-4 w-full pl-8 pr-4 ' />

            </div>

            <div className='p-4 items-center'>
              <a href="https://residencialaureo.com/aviso-de-privacidad/" className='text-sm p-2 mb-4 '>Al hacer click a enviar aceptaras lo <span className='text-[#B78D4E]'>Término y Condiciones</span> como así las <span className='text-[#B78D4E]'>Políticas de Privacidad </span></a>
            </div>

            {/* <p className='text-sm p-2 justify-center'>Al hacer click a registrarte aceptaras los <span className='text-[#B78D4E]'>Término y Condiciones</span> como así las <span className='text-[#B78D4E]'>Políticas de Privacidad </span></p> */}
          </div>
          <div className='relative  w-full'>
            <figure className='relative w-full'>
              <img src={AureoPeek} alt="Imagen" className='h-auto max-w-full rounded-lg ' />
            </figure>
          </div>
          <button type="submit" className='bg-[#B78D4E] w-full text-white rounded-lg  py-3 px-8 mt-4 '>Enviar</button>




        </form>
      </div>
    </div>
  )
}

export default Contact
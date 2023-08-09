import React from 'react'
import { RiPhoneFill, RiFacebookBoxFill,RiInstagramLine } from "react-icons/ri";


const Footer = () => {
  return (

    <footer class="bg-[#353330] dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div class="md:flex md:justify-between mt-16">
          <div class="mb-6 md:mb-0">
            <a href="https://residencialaureo.com/inicio//" class=" flex  gap-2 items-center">
              {/* <img src="/images/LOGO AUREO -01.png" class="h-8 mr-3" alt="FlowBite Logo" /> */}
              <img src="src/assets/images/LOGO_AUREO_BLANCO.png" alt="" className='h-[60px] w-[163px] mb-4 ' />
              <img src="src/assets/images/peek-removebg-preview.png" alt="" className='h-[86px] w-[154px] mb-4' />
            </a>
            <span class="self-center text-sm   text-[#898783]  dark:text-white">Aureo Residencial es un desarrollo <br /> inmobiliario de Grupo OBR</span>
            <div className='flex relative '>
              <RiPhoneFill className='mt-10 text-[#C69145] text-[34px]  ' /> <span className=' text-[#B4B1B2] text-xl absolute bottom-0 left-10 '>663 113 8555 </span>
            </div>
          </div>

          <div class="grid grid-cols-2  gap-16 sm:gap-6 sm:grid-cols-3">
            <div className=' right-0'>
              <h2 class="mb-6 text-sm text-gray-200 uppercase dark:text-white">HORARIOS DE ATENCIÓN</h2>
              <table className='w-full'>
                <tbody>
                  <tr className='text-[#898783]' >
                    <td>Lunes</td>

                    <td className='text-gray-200 text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783]'>
                    <td>Martes</td>

                    <td className='text-gray-200  text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783]'>
                    <td>Miercoles</td>

                    <td className='text-gray-200  text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783]'>
                    <td>Jueves</td>

                    <td className='text-gray-200  text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783]'>
                    <td>Viernes</td>

                    <td className='text-gray-200  text-right'>9am - 6pm</td>
                  </tr>
                  <tr className='text-[#898783]'>
                    <td>Sab - Dom</td>

                    <td className='text-gray-200  text-right'>10am - 4pm</td>
                  </tr>
                </tbody>
              </table>
              {/* <table class="table-fixed">
                <thead className='text-[#898783] '>
                  <tr className='border-b'>
                    <th>Lunes</th>
                  </tr>
                  <tr>
                  <th>Martes</th>
                  </tr>
                  <tr>
                  <th>Miércoles</th>
                  </tr>
                  <tr>
                  <th>Jueves</th>
                  </tr>
                  <tr>
                  <th>Viernes</th>
                  </tr>
                  <tr>
                  <th>Sab - Dom</th>
                  </tr>
              
                  <tbody>
                    <tr>
                    <td>1961</td>
                    </tr>
                  </tbody>
                </thead>
              </table> */}
            </div>
            <div>
              {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                </li>
              </ul> */}
            </div>
            <div className=''>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
              <ul class="text-gray-200 flex gap-10 dark:text-gray-400 font-medium">
                <li class="mb-4 ">
                  <RiFacebookBoxFill className='hover:text-[#C69145] cursor-pointer text-[46px]' onClick={() => window.open('https://www.facebook.com/ResidencialAureo')}/>
                  {/* <a href="#" class="hover:underline">Privacy Policy</a> */}
                </li>
                <li>
                  <RiInstagramLine className='hover:text-[#C69145] cursor-pointer text-[46px]' onClick={() => window.open('https://www.instagram.com/residencialaureo/?igshid=YmMyMTA2M2Y%3D')}/>
                  {/* <a href="#" class="hover:underline">Terms &amp; Conditions</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-[#898783] sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-[#898783] sm:text-center dark:text-gray-400">© Copyright 2023 Aureo Residencial </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a href="https://flowbite.com/" class="text-[#898783] text-sm">Aviso de Privacidad</a>
          
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
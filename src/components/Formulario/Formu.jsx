import React, { useState } from 'react'
import Selector from '../Botones/Selector';

const Formu = () => {
  return (
    <div className=' lg:px-4 py-6 mt-6 rounded-lg w-full text-black'>
      <h3 className="font-sans py-4 text-3xl  text-center">Cotizador</h3>
      <Selector />
      {/* contenedor goblal 
      grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2 m-4 p-4
      border-2  lg:flex w-full justify-between border-green-700 p-2
      */}
      <div className='grid grid-cols-1 lg:grid-cols-2 border-gray-400 border-2 rounded-lg  mb-2 m-4 p-4'>
        {/* contenedor formulario */}
        <form className='bg-[#F9F6F1] text-lg font-sans text-black rounded-lg p-4  w-full '>
          <div className='mb-4'>
            <p className='mb-4 '>¿Cuánto cuesta la casa que quieres?</p>
            <input type="number" name='value1' className="py-3 pl-4 pr-4 w-full outline-none  bg-transparent rounded-lg  focus:border focus:border-[#A27D40] " placeholder="Ingresa cantidad "></input>
          </div>
          <div className='mb-4'>
            <p className='mb-4  '>¿Cuanto apartado darás?</p>
            <input type="number" name='value2' className="py-3 pl-4 pr-4 w-full outline-none  bg-transparent rounded-lg  focus:border focus:border-[#A27D40] " placeholder="Ingresa cantidad "></input>
          </div>
        </form>
        {/* contenedor FinaBan  */}
        <div className='p-4 '>
          <h3 className="mb-4 text-lg text-gray-900">Financimiento Bancario</h3>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-[#F9F6F1] border border-[#CCAC5E] rounded-lg sm:flex">
            <li className="w-full border-b border-[#CCAC5E] sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input  type="radio" className="w-4 h-4 text-[#B78D4E] bg-gray-100 border-gray-300 focus:ring-[#B78D4E] focus:ring-2 " />
                <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm  font-semibold text-gray-900 ">80% - 20%</label>
              </div>
            </li>
            <li className="w-full border-b border-[#CCAC5E] sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input type="radio"  className="w-4 h-4 text-[#B78D4E] bg-gray-100 border-gray-300 focus:ring-[#B78D4E]   focus:ring-2 " />
                <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm  font-semibold text-gray-900 ">70% - 30%</label>
              </div>
            </li>
            <li className="w-full border-b border-[#CCAC5E] sm:border-b-0 sm:border-r">
              <div class="flex items-center pl-3">
                <input type="radio"   className="w-4 h-4 text-[#B78D4E] bg-gray-100 border-gray-300 focus:ring-[#B78D4E]   focus:ring-2" />
                <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm  font-semibold text-gray-900">60% - 40%</label>
              </div>
            </li>
          </ul>

          <div className='mt-4'>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-[#F9F6F1] border border-[#CCAC5E] rounded-lg sm:flex">
            <li className="w-full border-b border-[#CCAC5E] sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input  type="radio"  className="w-4 h-4 text-[#B78D4E] bg-gray-100 border-gray-300 focus:ring-[#B78D4E] focus:ring-2 " />
                <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm  font-semibold text-gray-900 ">80% - 20%</label>
              </div>
            </li>
            <li className="w-full border-b border-[#CCAC5E] sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input  type="radio"  className="w-4 h-4 text-[#B78D4E] bg-gray-100 border-gray-300 focus:ring-[#B78D4E]   focus:ring-2 " />
                <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm  font-semibold text-gray-900 ">70% - 30%</label>
              </div>
            </li>
            <li className="w-full border-b border-[#CCAC5E] sm:border-b-0 sm:border-r">
              <div class="flex items-center pl-3">
                <input  type="radio" className="w-4 h-4 text-[#B78D4E] bg-gray-100 border-gray-300 focus:ring-[#B78D4E]   focus:ring-2" />
                <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm  font-semibold text-gray-900">60% - 40%</label>
              </div>
            </li>
          </ul>
          </div>
          {/* <p className='text-center mt-4'>ORB GROUP CONSTRUCTORA</p> */}
        </div>
        <div className='mt-16 '>
          <button className="flex w-full justify-center rounded-lg bg-[#B78D4E] px-3 py-1.5 text-sm font-semibold font-sans leading-6 text-white shadow-lg hover:bg-[#CCAC5E]">Calcular</button>
        </div>
      </div>
    </div>
  )
}

export default Formu
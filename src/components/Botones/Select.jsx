import { BiChevronDown } from 'react-icons/bi'
import React, { useState, useEffect } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import casas from "../../casas.json"


const Select = () => {
  const [houses, setHouses] = useState(null);
  // const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    fetch("/src/casas.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setHouses(data)
      })
  })
  return (

    <div className='relative   flex flex-col px-3 w-full'>
      <div className='bg-[#B78D4E] cursor-pointer flex gap-2 text-gray-200 w-full p-2 items-center  justify-center rounded '>
        <BiChevronDown />
        selector
      </div>
      <ul className='bg-[#F9F6F1]  shadow-2xl rounded-lg mt-2 cursor-pointer overflow-y-auto max-h-60'>
        <div >
        <AiOutlineSearch className='text-xl text-gray-700' />
          <input type="text" placeholder='Buscar...' className='placeholder:text-gray-700 bg-[#F9F6F1] border-none focus:ring-0 p-2 outline-none rounded-lg' />
        </div>
        {
          houses?.map(house => (
            <li key={house?.numero} className='p-2 text-sm hover:bg-[#B78D4E] rounded hover:text-white '>

              {house?.numero}

            </li>

          ))
        }



      </ul>
    </div>

    //   <button onClick={() => setIsOpen((prev) => !prev)} className='bg-[#B78D4E] text-gray-200 p-4 w-full flex items-center justify-between rounded font-bold tracking-wider border-4 border-transparent active:border-[#CCAC5E] duration-600 active:text-[#CCAC5E]'> Seleccionar
    //     {!isOpen ? (
    //       <AiOutlineCaretDown className='h-8' />
    //     ) : (
    //       <AiOutlineCaretUp className='h-8' />
    //     )}
    //   </button>

    //   {isOpen && (
    //     <div className='bg-[#B78D4E] overflow-y-auto h-32 mt-2 transition duration-500 top-20 text-gray-200 flex flex-col rounded-lg p-2 w-full'>

    //       <input type="text" placeholder="Buscar..."className='placeholder:text-gray-200 bg-[#F9F6F1] border border-gray-300 focus:ring-0 p-2 outline-none rounded-lg bg-transparent' />
    //       {casas?.map((item, i) => (
    //         <ul className='flex p-4 w-full justify-between  transition duration-800 hover:bg-[#CCAC5E] cursor-pointer rounded-r-lg border-l-transparent mt-1 hover:border-l-gray-200 border-l-4' key={i}>



    //           <li className='font-semibold'>{item.numero}</li>
    //            </ul>
    //       ))}
    //     </div>
    //   )}
    // </div>
  )
}

export default Select
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai';

import Imgproto from '../Imgproto';
import React, { useState, useEffect } from 'react'

const Selector = () => {
  const [houses, setHouses] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const [selectedHouseData, setSelectedHouseData] = useState(null);
  useEffect(() => {
    fetch("/src/casas.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setHouses(data)
      })
  }, [])
  const handleInputChange = (e) => {

    const value = e.target.value.toLowerCase();
    setInputValue(value);

  };
  const handleHouseClick = (houseNumber) => {
    setSelected(houseNumber);
    setInputValue(houseNumber);
    setIsOpen(false)

    const selectedHouse = houses.find(house => house.numero === houseNumber);
    setSelectedHouseData(selectedHouse);
    setIsOpen(false);
    console.log(selectedHouse)
  }

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen)

  };
  const formatMoney = (amount) => {
    return amount.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN'
    });
  };
  return (

    <div className='font-sans grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2 m-4 p-2' >
      <div className='flex flex-col'>
      <h2 className='text-black  text-lg mb-2'>Número de Casa</h2>

      <div className='relative '>
      {/* <div className='  flex  lg:flex mb-2 m-4 gap-4  p-4'>
      <h2 className='text-black  font-semibold'>Número de Casa</h2>
    </div> */}
     
      <div className='bg-[#B78D4E] cursor-pointer flex gap-2 text-gray-200 w-full p-2 items-center  justify-center rounded ' onClick={handleDropdownToggle}> {selected ? selected : 'Selecciona'}
        <BiChevronDown />

      </div>
      <ul className={`bg-[#F9F6F1] shadow-2xl rounded-lg mt-2 cursor-pointer overflow-y-auto max-h-60 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex items-center bg-[#F9F6F1]  px-2 sticky top-0'>
          <AiOutlineSearch className='text-xl text-gray-700' />

          <input type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Buscar...' className='placeholder:text-gray-700 bg-[#F9F6F1] border-none focus:ring-0 p-2 outline-none rounded-lg' />
        </div>

        {houses?.map(house => (
          <li
            key={house?.numero}
            className={`p-2 text-sm hover:bg-[#B78D4E] rounded hover:text-white ${selected === house?.numero ? 'bg-[#B78D4E] text-white' : ''}`}
            onClick={() => handleHouseClick(house?.numero)} >


            {house?.numero}

          </li>
        ))}
      </ul>
      {selectedHouseData && (
        <div className=' bg-[#F9F6F1] mt-8 mb-8 p-4 shadow-2xl text-gray-800 border-gray-400 text-sm gap-2 font-bold rounded-lg '>
          <div className='w-full relative py-2 border-t-2 mt-2 border-b-2 mb-2 border-gray-200'>

            <h3>Número: <span className='text-[#B78D4E] text-lg '># {selectedHouseData.numero}</span> </h3>
            <p>Tipo de Prototipo: <span className='text-[#B78D4E] text-lg '>{selectedHouseData.tipo}</span></p>
            <p>Precio de preventa: <span className='text-[#B78D4E] text-lg'>{formatMoney(selectedHouseData.preciopreventa)} MXN</span></p>
            <p>Apartado $</p>
            <div className=' bg-[#F9F6F1] text'>
              <p>M² Contrucción: <span className='text-[#B78D4E] text-lg'>{selectedHouseData.m2construido}m²</span></p>
              <p>Lote M²: <span className='  text-[#B78D4E]  text-lg'>{selectedHouseData.superficielote}m² </span></p>
              <p>Lote Tipo:<span className='text-[#B78D4E] text-lg'> {selectedHouseData.lotetipo}m²</span></p>
              <p>Terrono Excedente: <span className='text-[#B78D4E] text-lg'>{selectedHouseData.excedenteterreno}m²</span></p>
            </div>
          </div>
        </div>
      )}
  
       </div>
       
      </div>
      {selectedHouseData && (
       <div className='lg:col-span-1 lg:col-start-2 flex items-center justify-center'>
       <Imgproto selectedHouseData={selectedHouseData} />
     </div>
      )}
   
      
    </div>
    
  )
}

export default Selector
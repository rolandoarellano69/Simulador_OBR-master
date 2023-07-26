import React, { useEffect, useState } from 'react'
import Select from './Select';
import Selector from './Select';



const Bottums = () => {
  const [casas, setCasas] = useState("")
  
  // const [inputValue, setInputValue] = useState("")
  // const [selected, setSelected] = useState("")
  // const [open, setOpen] = useState(false)
  // useEffect(() => {
  //   // fetch ("/src/casas.json")
  //   // .then(res => res.json())
  //   // .then(data => {
  //   //   console.log(data)
  //   //   setHouses(data)
  //   // })

  //   // axios.get('/casas.json')
  //   //   .then((res) => {
      
  //   //     setHouses(res.data);
        
  //   //   })
  //   //   .catch((err) => {
  //   //     console.error('Error al obtener las casas: ' + err)
  //   //   });
  //   //   console.log(data)
  //   // setHouses(data)
    
  //   // fetch('https://restcountries.com/v2/all?fields=name')
  //   //   .then(res => res.json())
  //   //   .then((data) => {
  //   //     console.log(data)
  //   //     setHouses(data);
  //   //   });
  // }, [])


  return (
    <div className='  flex  lg:flex mb-2 m-4 gap-4  p-4'>
      <h2 className='text-black  font-semibold'>Número de Casa</h2>
      <Selector />


      

      {/* <div className='w-72 font-medium h-80'>
        <div onClick={() => setOpen(!open)} className={`bg-[#B78D4E] cursor-pointer flex gap-2 text-gray-200 w-full p-2 items-center  justify-center rounded
        ${selected && "text-gray-200"}
        `}>
          {selected ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected : 'Seleccionar '}
          <BiChevronDown className={`${open && 'rotate-180 transition duration-500'}`} />
        </div>

        <ul className={`bg-[#F9F6F1]  shadow-2xl rounded-lg mt-2 cursor-pointer overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'}`}>
          <div className='flex items-center bg-[#F9F6F1]  px-2 sticky top-0'>
            <AiOutlineSearch className='text-xl text-gray-700' />
            
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.toLowerCase())} placeholder='Buscar...' className='placeholder:text-gray-700 bg-[#F9F6F1] border-none focus:ring-0 p-2 outline-none rounded-lg' />
          </div>

          {houses?.map((house) => (


            <li key={house?.id}
              className={`p-2 text-sm hover:bg-[#B78D4E] rounded hover:text-white 
            ${house?.numero?.toLowerCase() === selected?.toLowerCase() && 'bg-white'}
            ${house?.numero?.toLowerCase().startsWith(inputValue)
                  ? "block"
                  : "hidden"
                }`}
              onClick={() => {
                if (house?.numero?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(house?.numero);
                  setOpen(false)
                  setInputValue("")
                }

              }}
            >{house.numero}</li>
          ))}

        </ul>
      </div> */}

    </div>
  )
}

export default Bottums
import React,{ useState} from 'react'
import Bottums
  from '../Botones/Bottums';

const Formu = () => {
  const [values, setValues] = useState({

    value1: 0,
    value2: 0,
    resultado: 0,
  });

  const handleInputChange = (ev) => {
    const {name, value} = ev.target;
    setValues({...values, [name]: parseFloat(value),
    });
  };
  const calcularSuma = () => {
    const suma = values.value1 + values.value2;
    setValues({
    resultado: isNaN(suma) ? 0 : suma,
  });// Maneja el caso en que los valores no sean números válidos
  };

  return (
    <div className=' lg:px-4 py-6 mt-6 rounded-lg w-full text-black'>
      <Bottums />
      <form className='bg-[#F9F6F1]  text-black rounded-lg p-4  w-full '>
        <div className='mb-4'>
          <p className='mb-4 font-semibold'>¿Cuánto cuesta la casa que quieres?</p>
          <input type="number" name='value1' value={values.value1} onChange={handleInputChange} className="py-3 pl-4 pr-4 w-full outline-none  bg-transparent rounded-lg  focus:border focus:border-[#A27D40] " placeholder="Ingresa cantidad "></input>
        </div>

        <div className='mb-4'>
          <p className='mb-4  font-semibold'>¿En qué estado te gustaría adquirir la casa?</p>
          <input type="number" name='value2' value={values.value2} onChange={handleInputChange} className="py-3 pl-4 pr-4 w-full outline-none  bg-transparent rounded-lg  focus:border focus:border-[#A27D40] " placeholder="Ingresa cantidad "></input>
        </div>

        <div className='mb-4'>
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">¿Cuánto tiempo necesitas para pagar?</h3>
          <ul class="items-center w-full text-sm font-medium text-gray-900 bg-[#F9F6F1] border border-[#CCAC5E] rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full border-b border-[#CCAC5E] sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#B78D4E] bg-gray-100 border-gray-300 focus:ring-[#B78D4E] dark:focus:ring-[#B78D4E] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm  font-semibold text-gray-900 dark:text-gray-300">5 Años </label>
              </div>
            </li>
            <li class="w-full border-b border-[#CCAC5E] sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#B78D4E] bg-gray-100 border-gray-300 focus:ring-[#B78D4E] dark:focus:ring-[#B78D4E] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm  font-semibold text-gray-900 dark:text-gray-300">15 Años</label>
              </div>
            </li>
            <li class="w-full border-b border-[#CCAC5E] sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#B78D4E] bg-gray-100 border-gray-300 focus:ring-[#B78D4E] dark:focus:ring-[#B78D4E] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm  font-semibold text-gray-900 dark:text-gray-300">20 Años</label>
              </div>
            </li>

          </ul>

          {/* <p className='text-center mt-4'>ORB GROUP CONSTRUCTORA</p> */}

          <div className='mt-16'>
          <button onClick={calcularSuma} class="flex w-full justify-center rounded-md bg-[#B78D4E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#CCAC5E]">Calcular</button>
          </div>
          <p>El resultado de la suma es: {values.resultado}</p>
        </div>
      </form>

    </div>
  )
}

export default Formu
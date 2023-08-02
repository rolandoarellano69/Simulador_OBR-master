import React from 'react'

const Imgproto = ({ selectedHouseData }) => {
  const getImageUrl = (tipo) => {
    if (tipo === 'Aureo') {
      return 'src/assets/images/AUREO TIPO SIN TERRAZA 4K.jpg';
    } else if (tipo === 'Aureo Plus') {
      return 'src/assets/images/AUREO TIPO CON TERRAZA 4K.jpg';
    } else {
      return 'src/assets/images/ACCESO AUREO 2noche 4K.jpg';
    }
  };

  return (

    <div className='relative w-full'>
      <figure className=' relative w-full'>
        <img className=" h-auto max-w-full rounded-tl-lg " src={getImageUrl(selectedHouseData.tipo)} alt="image description" />
        <figcaption class="px-5 py-3 mb-8 text-black text-center  rounded-b-lg   shadow-2xl text-lg font-semibold">{selectedHouseData.tipo}</figcaption>
      </figure>
    </div>
  )
}

export default Imgproto;
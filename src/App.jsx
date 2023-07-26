import React from 'react'
import Calculo from './components/Calculo';
import Navbar from './components/NavBar/Navbar';
import Formu from './components/Formulario/Formu';
import Table from './components/Tablas/Table';
import Bottums from './components/Botones/Bottums';
import Footer from './components/Footer/Footer';

const App = () => {
  return (

    <div className="App bg-[#F9F6F1] h-full w-full text-white">
      <Navbar />
      <div className=' grid grid-cols-1 lg:grid-cols-2 grid-row-2'>
        {/* content-between buscar y comparar items-start */}
      <Formu />
      <Calculo />
      </div>
      <Table/>
      <Table/>
      <Table/>

      <Footer/> 
    </div>
  )
}

export default App